import Loader from 'react-loaders';
import './index.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_kka0mjn',
                'template_qkol58d',
                refForm.current,
                'GzSD6cMPDF1Tlb_nf'
            )
            .then (
                () => {
                    alert("Message sent")
                    window.location.reload(false)
                },
                () => {
                    alert("failed")
                }
            )
    }
    return (
        <>
            <div className='container conatct-page'>
                <div className='text-zone'>
                    <h1>
                        Contact Me
                    </h1>
                    <p>
                        I am very ambitious and hard working. i got into front end
                        developemnet since i was 15. Been using HTML since 8th grade
                        and slowly upraded to CSS in 10th.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required/>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="Send" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Subha,
                    <br />
                    Yucaipa High School, 92399 <br />
                    California, United States <br />
                    <span>subha@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[13.0827, 80.2707]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[13.0827, 80.2707]}>
                            <Popup>Subha Studies Here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;