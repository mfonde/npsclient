import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';


const MyPostsCreate = (props) => {
    const [parkName, setParkName] = useState('');
    const [usState, setUsState] = useState('');
    const [activity, setActivity] = useState('');
    const [comments, setComments] = useState('');

    const createPost = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/post/`, {
            method: 'POST',
            body: JSON.stringify({post:
            {park: parkName, state: usState, activity: activity, comments: comments}}),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : props.sessionToken
            }
        }).then(res => res.json())
        .then(postData => {
            console.log(postData);
            setParkName('');
            setUsState('');
            setActivity('');
            setComments('');
            props.createPostPageOff();
            props.fetchMyPosts();
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>New Post</ModalHeader>
            <ModalBody>
                <Form onSubmit={createPost}>
                    <FormGroup>
                        <Label htmlFor='parkName' />
                        <Input name='parkName' value={parkName} type='select' onChange={(e) => setParkName(e.target.value)}>
                            <option value=''>Select Park</option>
                            <option value='Acadia'>Acadia, ME</option>
        <option value='American Samoa'>American Samoa</option>
        <option value='Arches'>Arches, UT</option>
        <option value='Badlands'>Badlands, SD</option>
        <option value='Big Bend'>Big Bend, TX</option>
        <option value='Biscayne'>Biscayne, FL</option>
        <option value='Black Canyon of the Gunnison'>Black Canyon of the Gunnison, CO</option>
        <option value='Bryce Canyon'>Bryce Canyon, UT</option>
        <option value='Canyonlands'>Canyonlands, UT</option>
        <option value='Capitol Reef'>Capitol Reef, UT</option>
        <option value='Carlsbad Caverns'>Carlsbad Caverns, NM</option>
        <option value='Channel Islands'>Channel Islands, CA</option>
        <option value='Congaree'>Congaree, SC</option>
        <option value='Crater Lake'>Crater Lake, OR</option>
        <option value='Cuyahoga Valley'>Cuyahoga Valley, OH</option>
        <option value='Death Valley'>Death Valley, CA/NV</option>
        <option value='Denali'>Denali, AK</option>
        <option value='Dry Tortugas'>Dry Tortugas, FL</option>
        <option value='Everglades'>Everglades, FL</option>
        <option value='Gates of the Arctic'>Gates of the Arctic, AK</option>
        <option value='Gateway Arch'>Gateway Arch, MO</option>
        <option value='Glacier'>Glacier, MT</option>
        <option value='Glacier Bay'>Glacier Bay, AK</option>
        <option value='Grand Canyon'>Grand Canyon, AZ</option>
        <option value='Grand Teton'>Grand Teton, WY</option>
        <option value='Great Basin'>Great Basin, NV</option>
        <option value='Great Sand Dunes'>Great Sand Dunes, CO</option>
        <option value='Great Smoky Mountains'>Great Smoky Mountains, TN/NC</option>
        <option value='Guadalupe Mountains'>Guadalupe Mountains, TX</option>
        <option value='Haleakala'>Haleakala, HI</option>
        <option value='Hawaii Volcanoes'>Hawaii Volcanoes, HI</option>
        <option value='Hot Springs'>Hot Springs, AR</option>
        <option value='Indiana Dunes'>Indiana Dunes, IN</option>
        <option value='Isle Royale'>Isle Royale, MI</option>
        <option value='Joshua Tree'>Joshua Tree, CA</option>
        <option value='Katmai'>Katmai, AK</option>
        <option value='Kenai Fjords'>Kenai Fjords, AK</option>
        <option value='Kings Canyon'>Kings Canyon, CA</option>
        <option value='Kobuk Valley'>Kobuk Valley, AK</option>
        <option value='Lake Clark'>Lake Clark, AK</option>
        <option value='Lassen Volcanic National Park'>Lassen Volcanic National Park, CA</option>
        <option value='Mammoth Cave'>Mammoth Cave, KY</option>
        <option value='Mesa Verde'>Mesa Verda, CO</option>
        <option value='Mount Ranier'>Mount Ranier, WA</option>
        <option value='North Cascades'>North Cascades, WA</option>
        <option value='Olympic'>Olympic, WA</option>
        <option value='Petrified Forest'>Petrified Forest, AZ</option>
        <option value='Pinnacles'>Pinnacles, CA</option>
        <option value='Redwood'>Redwood, CA</option>
        <option value='Rocky Mountain'>Rocky Mountain, CO</option>
        <option value='Saguaro'>Saguaro, AZ</option>
        <option value='Sequoia'>Sequoia, CA</option>
        <option value='Shenandoah'>Shenandoah, VA</option>
        <option value='Theordore Roosevelt'>Theodore Roosevelt, ND</option>
        <option value='Virgin Islands'>Virgin Islands</option>
        <option value='Voyageurs'>Voyageurs, MN</option>
        <option value='Wind Cave'>Wind Cave, SD</option>
        <option value='Wrangell-St. Elias'>Wrangell-St. Elias</option>
        <option value='Yellowstone'>Yellowstone, WY/MT/ID</option>
        <option value='Yosemite'>Yosemite, CA</option>
        <option value='Zion'>Zion, UT</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='usState' />
                        <Input name='usState' value={usState} onChange={(e) => setUsState(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='activity' />
                        <Input name='activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='comments' />
                        <Input name='comments' value={comments} onChange={(e) => setComments(e.target.value)} />
                    </FormGroup>
                    <Button type='submit'>Save Post</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default MyPostsCreate;