import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { ProgressBar } from 'react-bootstrap';

function LectureDetailAsideHeader({ aside, setAside }) {
   let [now, setNow] = useState(60);
   return (
      <>
         <Button
            onClick={() => {
               setAside(!aside);
            }}
            style={{
               position: 'absolute',
               display: 'inline',
               fontSize: '20px',
               right: '-80px',
               top: '10px',
               backgroundColor: 'rgba(0,0,0,0.2)',
               height: '50px',
            }}>
            {aside ? <i className="bi bi-arrow-left"></i> : <i className="bi bi-arrow-right"></i>}
         </Button>
         <div
            style={{
               height: '160px',
               padding: '20px',
               paddingTop: '30px',
               backgroundColor: '#383838',
               color: 'white',
            }}>
            <div>
               <span style={{ fontSize: '16px' }}>React 리액트 기초부터 쇼핑몰 프로젝트까지!</span>
            </div>
            <div style={{ marginTop: '20px' }}>
               <span style={{ fontWeight: '700', fontSize: '15px' }}>수강기간 : 220Days</span>
            </div>

            <ProgressBar
               now={now}
               style={{ marginTop: '20px' }}
               animated={true}
               label={`${now}%`}
               variant={'success'}></ProgressBar>
         </div>
      </>
   );
}

export default LectureDetailAsideHeader;