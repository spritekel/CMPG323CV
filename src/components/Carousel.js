import React from 'react';
import Card from './Card'

import LinkedIn from '../assets/images/Linkedin.png';
import HackTheBox from '../assets/images/hackthebox.png';
import TryHackMe from '../assets/images/thm1.png';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {
    constructor(props){
        super (props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'TryHackMe',
                    subTitle: 'Enumeration is key',
                    imgSrc: TryHackMe,                  
                    link: 'https://tryhackme.com/p/SpritePop',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Kelvin Popovic',
                    subTitle: 'LinkedIn',
                    imgSrc: LinkedIn,
                    link: 'https://www.linkedin.com/in/kelvin-popovi%C4%87-4636181b4/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'HackTheBox',
                    subTitle: 'Pen-testing labs',
                    imgSrc: HackTheBox,
                    link: 'https://www.hackthebox.eu/home/users/profile/200250',
                    selected: false
                }
            ]
        }
    }

    cardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }


    createItems = (items) => {
        return items.map(item =>{
            return <Card item={item} click={(e => this.cardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.createItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}
export default Carousel