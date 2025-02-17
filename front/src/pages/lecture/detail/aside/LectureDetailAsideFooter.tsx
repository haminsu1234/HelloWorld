import {useNavigate} from "react-router-dom";
import {Button} from "reactstrap";
import React from "react";

function LectureDetailAsideFooter() {
    const navigate = useNavigate()
    return <>
        <div
            style={{backgroundColor: '#eeeeee', height: '120px', bottom: '0', width: '100%', padding: '20px', position: 'absolute'}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Button
                    style={{margin: '0', marginBottom: '10px', width: '85%', backgroundColor: '#eeeeee', color: '#ff4949', fontFamily: 'nanumsquare', border: '1px solid #ff4949', fontWeight: 550}}>게시판</Button>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Button
                    style={{margin: '0', marginBottom: '10px', width: '85%', backgroundColor: '#eeeeee', color: '#ff4949', fontFamily: 'nanumsquare', border: '1px solid #ff4949', fontWeight: 550}}
                    onClick={() => {
                        navigate('/lecture/view')
                    }}>강좌로 돌아가기</Button>
            </div>
        </div>
    </>
}
export default LectureDetailAsideFooter;