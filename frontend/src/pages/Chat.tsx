import React from 'react'
import { Box, Avatar, Typography, Button, IconButton } from "@mui/material"
import { red } from '@mui/material/colors'
import { useAuth } from '../context/AuthContext'
import ChatItem from '../components/chat/ChatItem'
import {IoMdSend} from 'react-icons/io'

const chatMessages = [
    {"role": "user", "content": "Hello, could you help me with some coding questions?"},
    {"role": "assistant", "content": "Of course! What coding questions do you have?"},
    {"role": "user", "content": "I need help creating an array of messages in a specific format."},
    {"role": "assistant", "content": "Got it. Could you tell me more about the format you need?"},
    {"role": "user", "content": "The format should include role and content fields."},
    {"role": "assistant", "content": "Understood! Here's an example of how that could be structured."}
]


const Chat = () => {
  const auth = useAuth()
  return <Box sx={{display: 'flex', flex: 1, width: '100%', height: '100%', mt: 3, gap: 3}}>
    <Box sx={{display: {md: "flex", xs: "none", sm: "none"}, flex: 0.2, flexDirection: 'column'}}>
      <Box 
        sx={{
          display: "flex", 
          width: "100%", 
          height: "60vh", 
          bgcolor: "rgb(17, 29, 39)",
          borderRadius:5,
          flexDirection: 'column',
          mx: 3,
          }}
      >
        <Avatar sx={{mx: "auto", my: 2, bgcolor:'white', color: 'black', frontWeight: 700}}
        >{ auth?.user?.name[0] }</Avatar>
        <Typography sx={{mx: 'auto', fontFamily: "work sans", my: 4, p: 3}}>
          You can ask some questions related to Knowledge, Business, Advices, Education, etc. But avoid sharing personal information
        </Typography>
        <Button sx={{width: "200px", my: 'auto', color: 'white', fontweight: "700", borderRadius: 3, mx: "auto", bgcolor: red[300], ":hover": {
          bgcolor: red.A400,
        }}}>Clear Conversation</Button>
      </Box>
    </Box>
    <Box sx={{display: "flex", flex:{md: 0.8, xs: 1, sm: 1}, flexDirection: 'column', px: 3}}>
      <Typography sx={{textAlign: 'center', fontSize: "40px", color: 'white', mb: 2, mx: "auto"}}>
        Model - GPT 3.5 Turbo
      </Typography>
      <Box sx={{width: "100%", height: "60vh", borderRadius: 3, mx: "auto", display: 'flex', flexDirection: "column", overflow: 'scroll', overflowX: "hidden", overflowY: "auto", scrollBehavior: "smooth"}}
      >{chatMessages.map((chat, index)=>(
        <ChatItem content={chat.content} role={chat.role} key={index}/>
      ))}</Box>
      <div style={{width: "100%", padding: "20px", borderRadius: 8, backgroundColor: "rgb(17, 27, 39)", display: "flex", margin: "auto"}}>
        <input type="text" style={{width: "100%", backgroundColor: "transparent", padding: "10px", border: "none", outline: "none", color: "white", fontSize: "20px"}}/>
        <IconButton sx={{ml: "auto", color: "white"}}>
          <IoMdSend />
        </IconButton>
      </div>
    </Box>
  </Box>
}

export default Chat