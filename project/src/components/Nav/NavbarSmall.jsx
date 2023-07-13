import React from 'react'
import { Col, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { modalOpen } from '../../store/modules/modal';
import PostMake from '../PostMake';
import navSmallClass from './NavbarSmall.module.css';

export default function NavbarSmall() {
  const dispatch = useDispatch();

  const postMakeFunction = () => {
    const payload = {
      backDrop: false,
      size: 'md',
      // content: 'test',
      content: <PostMake />,
    }
    dispatch(modalOpen(payload));
  }
  return (
    <>
    {/* 작은 화면에서는 Navbar Footer 고정 Fixed */}
    <Col xs={12} className={navSmallClass.navSmallBody + " d-block d-md-none"}>
      <Nav defaultActiveKey="/home" className={navSmallClass.navSmallWrap} >
        <Nav.Link to="/home">
          <div>
            <svg aria-label="홈" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path>
            </svg>
          </div>
        </Nav.Link>
        <Nav.Link eventKey="link-1">
          <div>
            <svg aria-label="탐색 탭" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
              <polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
              <polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon>
              <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
            </svg>
          </div>
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          <div>
            <svg aria-label="릴스" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
              <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line>
              <path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fillRule="evenodd"></path>
            </svg>
          </div>
        </Nav.Link>
        <Nav.Link eventKey="link-3" onClick={postMakeFunction}>
          <div>
            <svg aria-label="새로운 게시물" color="rgb(36, 24, 24)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
            </svg>
          </div>
        </Nav.Link>
        <Nav.Link eventKey="link-4">
          <div>
            <svg aria-label="Direct" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
              <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
              <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
            </svg>
          </div>
        </Nav.Link>
        <Nav.Link eventKey="link-5">
          <div>
            <img src="/images/profile.jpg" alt="profile" className={navSmallClass.navProfileImg} />
          </div>
        </Nav.Link>
      </Nav>
    </Col>
    </>
  )
}
