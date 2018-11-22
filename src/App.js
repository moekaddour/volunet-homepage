import React, { Component } from "react";

import "./App.css";
import {Collapse,
  Container ,
  Button ,
  Jumbotron,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";


const items = [
  {
    src: "carousel1.jpg",
    header:
      "Everybody can be great. Because anybody can serve.",
    caption: "Martin Luther King Jr"
  },
  {
    src: "carousel2.jpg",
    header: "Volunteers are love in motion",
    caption: ""
  },
  {
    src: "carousel3.jpg",
    header:
      "Act as if what you do makes a difference.  It does.",
    caption: "William James"
  },
  {
    src: "carousel4.jpg",
    header: "Only a life lived for others is worth living.",
    caption: "Albert Einstein"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeIndex: 0
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount(){
    document.title="Volunet"
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img className="centerimg" src={item.src} alt={item.altText} />
          <CarouselCaption
            className="text"
            captionText={item.caption}
            captionHeader={item.header}
          />
        </CarouselItem>
      );
    });

    return (
      
      <div className= "">
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src="logo.png" height="65"/></NavbarBrand>
          <h1 className="headrnav1">Volunet <h2 className="headrnav2">Get connected and make the difference</h2></h1>
          <br/>
          <br/>
          
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="http://167.99.183.44:3000/signup">Sign-up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://167.99.183.44:3000/signin">Sign-in</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Blog</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
        </div>
        <br/>
        <br/>
        <div className="container-fluid">
      <Jumbotron>
        <h1 className="display-3">More people. More impact.</h1>
        <p className="lead"></p>
        <hr className="my-2" />
        <p>Volunet is the most effective way to recruit highly qualified volunteers for your nonprofit. We match you with people who are passionate about and committed to your 
        cause, and who can help when and where you need them.
        And because volunteers are often donors as well, we make it easy for them to contribute their time and money.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
        <div className="container-fluid">
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">Get connected to qualified volunteers when and where you need them.</p>
        <hr className="my-2" />
        <p>With more volunteers and more volunteer opportunities than any other service,
        Volunet is how good people and good causes get connected.</p>
        <p className="lead">
          <Button color="primary">Get started</Button>
        </p>
      </Jumbotron>
    </div>
        <div className="container-fluid">
      <Jumbotron>
        <h1 className="display-3">Nonprofits</h1>
        <p className="lead">nonprofits rely on Volunet</p>
        <hr className="my-2" />
        <p>Volunet transforms volunteer recruiting, making it quick, easy and effective..</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
    <div>
        <Navbar  toggleable fluid="bottom" color="dark" light expand="md">
          <NavbarBrand href="/"><img src="logo.png" height="65"/></NavbarBrand>
          <h1 className="bottomnav1">Volunet</h1>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem> 
                <NavLink href="https://facebook.com"><img src="facebookicon.png" height="40"/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://twitter.com"><img src="twiticon.png" height="40"/></NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="https://instagram.com"><img src="instaicon.png" height="32"/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://youtube.com"><img src="utubeicon.png" height="35"/></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    
      </div>
    );
  }
}

export default App;
