import { createSlice } from "@reduxjs/toolkit";
export const tweetSlice=createSlice({
   name:"tweets",
   initialState:{
    tweets:[]
   },
   reducers:{
       addTweet:(state,action)=>{
           state.tweets=[action.payload,...state.tweets]
       },
       
   } 
})
export const{addTweet}=tweetSlice.actions
export const selectTweets=(state)=>state.tweet.tweets

export default tweetSlice.reducer