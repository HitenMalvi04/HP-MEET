import React from 'react';
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomid} = useParams();

    const myMeeting = async (element)=>{
        const appId = 1471446021;
        const serverSecret = "f0830602999c35879492b4e86ab69bbb";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomid,
            Date.now().toString(),  //this is actually the user identity
            "Hiten Malvi"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks:[
                {
                    name: 'Copy Link',
                    url: `http://localhost:3000/room/${roomid}`,
                }
            ],
            scenario:{
                model: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton : true,
        })
    }

    return (
        <>
            <div ref={myMeeting}/>
        </>
    );
}
export default RoomPage;