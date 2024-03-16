import { Container, Row, Col, Button, Card } from "react-bootstrap"
import biodata from "../assets/cikkk.png";
const landingPage = () => {
    return (
        <>
            <div className="landing">
                <div className="hero-landing">
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <div className="data-hero">
                                    <img src={biodata} alt="" />

                                    <Col lg={6}>
                                        <h1>Bio data</h1>
                                        <h6>
                                            nama          :bernard mackenzie
                                            <hr />
                                            tempat,tanggal lahir  :jakarta/07-februari-2007
                                            <hr />
                                            alamat :Jln.DR.M.Isa Lorong cinta damai
                                            <hr />
                                            jenis kelamin :pria
                                            <hr />
                                            agama         :buddha
                                            <hr />
                                        </h6>
                                    </Col>



                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {/* hobi */}
                    <div className="hobi-saya">
                        <Container>
                            <h5>Hobi saya</h5>
                            <Row className="mt-3">
                                <Col lg={4}>
                                    <Card >
                                        <Card.Img variant="top" src="../src/assets/barongsai.png" />
                                    </Card>
                                </Col>

                                <Col lg={3}>
                                    <Card >
                                        <Card.Img variant="top" src="../src/assets/biliard.png" />
                                    </Card>
                                </Col>

                                <Col lg={3}>
                                    <Card >
                                        <Card.Img variant="top" src="../src/assets/futsal.png" />
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <Container>
                        <h5>Sosial Media</h5>
                        <Row>
                            <Col lg={5}>
                                <div className="deskripsi-hero">
                                    <img src="../src/assets/instagram.png" alt="" />
                                <p><a className="d-flex" href="https:instagram.com/bernardmackenzie_8">Kunjungi</a></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>


                </div>

            </div>
        </>
    )
}

export default landingPage;