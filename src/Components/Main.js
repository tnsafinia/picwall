import React, { Component } from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap';

import { FaSearch } from "react-icons/fa";

export default class Main extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div >
                <div style={{ display: 'flex', justifyContent: 'center' }} >
                    <br/>
                    <InputGroup size="lg" style={{padding: "5%"}}>
                        <FormControl
                            placeholder="Search for pictures"
                            aria-label="Search for pictures"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button><FaSearch/></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
        )
    }
}

