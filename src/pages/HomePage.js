import Card from 'react-bootstrap/Card'

function HomePage() {
    return (
        <section>
            <Card>
                <Card.Img src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/22399718/Monster_Hunter_Rise_guides___Polygon.jpg"/>
                <Card.Body>
                    <Card.Title>Home</Card.Title>
                    <Card.Text>
                        This is meant to be a simple web app that displays all the available armour in the game Monster Hunter Rise
                    </Card.Text>
                </Card.Body>
            </Card>
        </section>
    );
}

export default HomePage;