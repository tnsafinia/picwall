import React, { Component } from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
import axios from 'axios';

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            secret: [],
            id: [],
            server: [],
            val:"Stockholm"
        };
      
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    sendGetRequest = async () => {
        
            await axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=541284cd81735f29f0655b616ed670ee&text=" + this.state.val + "&format=json&nojsoncallback=1")
                .then((response) => {
                    //console.log(response);

                    this.setState({
                        items: response.data.photos.photo,
                        secret: response.data.photos.photo.map((i) => i.secret),
                        id: response.data.photos.photo.map((i) => i.id),
                        server: response.data.photos.photo.map((i) => i.server)
                    })
                    //console.log(this.state.secret)
                })
                .catch((err) => {
                    alert(err)
                })
        
    }

    componentDidMount() {
       this.sendGetRequest();
    }


    handleSubmit(e) {
        e.preventDefault();
        this.sendGetRequest();
        //console.log(this.state.val)
    }

    

    render() {
        return (
            <div>
                {/*Search bar*/}
                <div style={{ display: 'flex', justifyContent: 'center' }} >
                    <br />
                    <InputGroup
                        size="lg"
                        style={{ padding: "5%" }} 
                        value={this.state.val}
                        onChange={e => this.setState({ val: e.target.value })}
                        data-testid="not-empty"
                    >
                        <FormControl
                            placeholder="Search for pictures"
                            aria-label="Search for pictures"
                            aria-describedby="basic-addon2"  
                        />
                        <InputGroup.Append>
                            <Button onClick={this.handleSubmit}
                                style={{ backgroundColor: "#7F82EB" }}
                                data-testid="button"
                            >
                                <FaSearch />
                            </Button>
                        </InputGroup.Append>
                        </InputGroup>
                </div>
                {/*Photos*/}
                <Photo items={this.state.items}/> 
                    
            </div>
        )
    }
}

