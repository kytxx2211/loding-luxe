RegisterNetEvent("luxe:firstJoin", function(isFirst)
    SendNUIMessage({
        type = "introStatus",
        firstJoin = isFirst
    })

    if not isFirst then
        ShutdownLoadingScreenNui()
    end
end)

AddEventHandler("onClientResourceStart", function(res)
    if res == GetCurrentResourceName() then
        TriggerServerEvent("luxe:checkFirstJoin")
    end
end)
