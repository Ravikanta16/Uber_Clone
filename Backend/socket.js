const socketIO=require('socket.io');
const userModel=require('./models/userModel');
const captainModel=require('./models/captainModel')

function initializeSocket(server){
    io=socketIO(server,{
        cors:{
            origin:'*',
            methods:['GET','POST']
        }
    });

    io.on('connection',(socket)=>{
        console.log(`client connected: ${socket.id}`);

        socket.on('join', async (data)=>{
            const {userId,userType}=data;
            console.log(`User ${userId} joined as user Type ${userType}`);
            if(userType ==='user'){
                await userModel.findByIdAndUpdate(userId,{SocketId:socket.id})
            }else if(userType === 'captain'){
                await captainModel.findByIdAndUpdate(userId,{SocketId:socket.id})
            }
        })

        socket.on('disconnect',()=>{
            console.log(`client disconnected: ${socket.id}`);
        });
    });
}

// function sendMessageToSocketId(socketId,message){
//     if(io){
//         io.to(socketId).emit('message',message);
//     }
//     else{
//         console.log('socket.io is not initialized');
//     }
// }

module.exports={initializeSocket};
