export const state = () => ({
    videos: [],
    currentVideo: {}
})

export const mutation = {
    SET_VIDEOS (state, videos){
        state.videos = videos
    }
}