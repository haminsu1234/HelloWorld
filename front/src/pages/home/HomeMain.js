import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from "reactstrap";
import React from "react";

function HomeMain() {

    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");
    return <>
        <div className="main">
            {/*탭*/}
            <div className="section section-tabs">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md="10" xl="6">
                            <p className="category" style={{fontFamily: '한컴 말랑말랑'}}>추천 강의목록</p>
                            <Card>
                                <CardHeader>
                                    <Nav className="justify-content-center" role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "1" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("1");
                                                }}
                                            >
                                                <i className="now-ui-icons objects_umbrella-13"></i>
                                                Java
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "2" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("2");
                                                }}
                                            >
                                                <i className="now-ui-icons shopping_cart-simple"></i>
                                                Python
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "3" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("3");
                                                }}
                                            >
                                                <i className="now-ui-icons shopping_shop"></i>
                                                React
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "4" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("4");
                                                }}
                                            >
                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                node
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent
                                        className="text-center"
                                        activeTab={"iconPills" + iconPills}
                                    >
                                        <TabPane tabId="iconPills1"><img
                                            src={`${process.env.PUBLIC_URL}/images/lecture/javaBook.jpg`}/>
                                            <div>이것이 자바다</div>
                                            <Button className="btn-round" color="info" type="button">
                                                모집중
                                                <span style={{
                                                    borderLeft: '1px solid skyblue',
                                                    marginLeft: '5px',
                                                    marginRight: '5px'
                                                }}></span>
                                                D-26
                                            </Button>
                                            <Button className="btn-round" color="primary" type="button">
                                                할인 가능
                                            </Button>
                                            <Button className="btn-round" color="warning" type="button">
                                                <i className="now-ui-icons ui-2_favourite-28"></i>
                                                관심 등록
                                            </Button>
                                            <div style={{
                                                borderTop: '1px solid gray',
                                                marginTop: '10px',
                                                textAlign: 'left',
                                                padding: '10px'
                                            }}>
                                                <span style={{fontSize: '20px'}}>무료</span>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="iconPills2">
                                            <p>
                                                I will be the leader of a company that ends up being
                                                worth billions of dollars, because I got the answers. I
                                                understand culture. I am the nucleus. I think that’s a
                                                responsibility that I have, to push possibilities, to
                                                show people, this is the level that things could be at.
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="iconPills3">
                                            <p>
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                                the nucleus.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="iconPills4">
                                            <p>
                                                "I will be the leader of a company that ends up being
                                                worth billions of dollars, because I got the answers. I
                                                understand culture. I am the nucleus. I think that’s a
                                                responsibility that I have, to push possibilities, to
                                                show people, this is the level that things could be at."
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="ml-auto mr-auto" md="10" xl="6">
                            <p className="category" style={{fontFamily: '한컴 말랑말랑'}}>채용공고</p>
                            <Card>
                                <CardHeader>
                                    <Nav className="justify-content-center" role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "1" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("1");
                                                }}
                                            >
                                                <i className="now-ui-icons objects_umbrella-13"></i>
                                                요즘 뜨는
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "2" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("2");
                                                }}
                                            >
                                                <i className="now-ui-icons shopping_cart-simple"></i>
                                                최근
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "3" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("3");
                                                }}
                                            >
                                                <i className="now-ui-icons shopping_shop"></i>

                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "4" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("4");
                                                }}
                                            >
                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                Settings
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent
                                        className="text-center"
                                        activeTab={"iconPills" + iconPills}
                                    >
                                        <TabPane tabId="iconPills1"><img
                                            src={`${process.env.PUBLIC_URL}/images/home/main_logo.png`}
                                            style={{width: '250px'}} alt='Hello World'/>
                                            <div style={{fontSize: '25px'}}>(주)Hello World</div>
                                            <Button className="btn-round" color="info" type="button">
                                                모집중
                                                <span style={{
                                                    borderLeft: '1px solid skyblue',
                                                    marginLeft: '5px',
                                                    marginRight: '5px'
                                                }}></span>
                                                D-26
                                            </Button>
                                            <Button className="btn-round" type="button">
                                                신입
                                            </Button>

                                            <Button className="btn-round" color="warning" type="button">
                                                <i className="now-ui-icons ui-2_favourite-28"></i>
                                                관심 등록
                                            </Button>
                                        </TabPane>
                                        <TabPane tabId="iconPills2">
                                            <p>
                                                I will be the leader of a company that ends up being
                                                worth billions of dollars, because I got the answers. I
                                                understand culture. I am the nucleus. I think that’s a
                                                responsibility that I have, to push possibilities, to
                                                show people, this is the level that things could be at.
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="iconPills3">
                                            <p>
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                                the nucleus.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="iconPills4">
                                            <p>
                                                "I will be the leader of a company that ends up being
                                                worth billions of dollars, because I got the answers. I
                                                understand culture. I am the nucleus. I think that’s a
                                                responsibility that I have, to push possibilities, to
                                                show people, this is the level that things could be at."
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="ml-auto mr-auto" md="10" xl="12">
                            <p className="category" style={{fontFamily: '한컴 말랑말랑'}}>커뮤니티</p>
                            <Card>
                                <CardHeader>
                                    <Nav className="justify-content-center" role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "1" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("1");
                                                }}
                                            >
                                                <i className="now-ui-icons objects_umbrella-13"></i>
                                                개발자 라운지
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "2" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("2");
                                                }}
                                            >
                                                <i className="now-ui-icons shopping_cart-simple"></i>
                                                스터디
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "3" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("3");
                                                }}
                                            >
                                                <i className="now-ui-icons shopping_shop"></i>
                                                Q&A
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent
                                        className="text-center"
                                        activeTab={"iconPills" + iconPills}
                                    >
                                        <TabPane tabId="iconPills1">
                                            <p>
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                                the nucleus.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="iconPills2">
                                            <p>
                                                I will be the leader of a company that ends up being
                                                worth billions of dollars, because I got the answers. I
                                                understand culture. I am the nucleus. I think that’s a
                                                responsibility that I have, to push possibilities, to
                                                show people, this is the level that things could be at.
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="iconPills3">
                                            <p>
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                                the nucleus.
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* <Col className="ml-auto mr-auto" md="10" xl="6">
                            <p className="category" style={{fontFamily:'한컴 말랑말랑'}}>채용공고</p>
                            <Card>
                                <CardHeader>
                                    <Nav
                                        className="nav-tabs-neutral justify-content-center"
                                        data-background-color="blue"
                                        role="tablist"
                                        tabs
                                    >
                                        <NavItem>
                                            <NavLink
                                                className={pills === "1" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setPills("1");
                                                }}
                                            >
                                                Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={pills === "2" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setPills("2");
                                                }}
                                            >
                                                Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={pills === "3" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setPills("3");
                                                }}
                                            >
                                                Messages
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={pills === "4" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setPills("4");
                                                }}
                                            >
                                                Settings
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent
                                        className="text-center"
                                        activeTab={"pills" + pills}
                                    >
                                        <TabPane tabId="pills1">
                                            <p>
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                                the nucleus.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="pills2">
                                            <p>
                                                I will be the leader of a company that ends up being
                                                worth billions of dollars, because I got the answers. I
                                                understand culture. I am the nucleus. I think that’s a
                                                responsibility that I have, to push possibilities, to
                                                show people, this is the level that things could be at.
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="pills3">
                                            <p>
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                                the nucleus.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="pills4">
                                            <p>
                                                "I will be the leader of a company that ends up being
                                                worth billions of dollars, because I got the answers. I
                                                understand culture. I am the nucleus. I think that’s a
                                                responsibility that I have, to push possibilities, to
                                                show people, this is the level that things could be at."
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>*/}
                    </Row>
                </Container>
            </div>
        </div>

    </>
}

export default HomeMain;