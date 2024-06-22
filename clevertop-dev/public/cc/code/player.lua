print("Use arrow keys to pick a track and Enter to play!")

local track = 1
local songs = {
    "Luigi's Casino", "https://github.com/Clevertop/nbssongs/raw/main/casino.dfpwm",
    "This fffire", "https://github.com/Clevertop/nbssongs/raw/main/thisFffire.dfpwm",
    "All Star", "https://github.com/Clevertop/nbssongs/raw/main/allStar.dfpwm",
    "Walkin on the Sun", "https://github.com/Clevertop/nbssongs/raw/main/walknOnTheSun.dfpwm",
    "Gangnam Style", "https://github.com/Clevertop/nbssongs/raw/main/Gangnam.dfpwm",
    "Never gonna give you up", "https://github.com/Clevertop/nbssongs/raw/main/20091025_Rick%20Astley%20-%20Never%20Gonna%20Give%20You%20Up%20(Official%20Music%20Video).dfpwm",
    "Writing on the Wall", "https://www.clevertop.dev/cc/music/writingOnTheWall.dfpwm",
    "Caramelldansen", "https://www.clevertop.dev/cc/music/caramella.dfpwm"
}

-- 1,2   3,4
-- #songs = 14
-- 


while true do
    local event, key = os.pullEvent("key")
    term.clear()
    -- print(track)
    print("Tom's neat little music player")
    print("")
    

    if key == keys.up and track < #songs-1 then
        track = track + 2
    elseif key == keys.down and track >= 3 then
        track = track - 2
    elseif key == keys.enter then
        term.clear()
        print("Playing:")
        print(songs[track])
        print("Press stop or hold Ctrl+T to go back to song select")
        print("")
        shell.execute("speaker","play",songs[track+1])
    end
    
    print("")
    print("Selected track: ")
    print(songs[track])

end
    
