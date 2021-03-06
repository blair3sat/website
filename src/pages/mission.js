import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Mission = props => (
  <Layout location={props.location}>
    <SEO title="Mission" />
    <div className="container has-background-white">
      <div className="title">
        <p className="title is-2">Our Mission</p>
      </div>
      <p>
       <b>Our nanosatellite</b> will measure the electron density of the ionosphere to map how radio frequency (RF) waves are affected.
      </p>
      <br />
      <p>
      <b>The importance</b> of the ionosphere comes from its wide utilization in 
      long-distance communications, specifically in over the horizon 
      (OTH) radars. Gathering detailed information about the ionosphere 
      helps account for its effects on RF signals, making communication
       cheaper and more reliable. Mapping the charge density of the ionosphere
       has been a longstanding scientific objective, and our team’s 
       unique approach is designed to pave the way for future research.

      </p>
      <br />
      <h4 className="title is-5" id="ionosondes">
        Ionosondes
      </h4>
      <p>
        Scientists currently measure charge density in the ionosphere by
        transmitting HF radio waves of different frequencies into the atmosphere
        and receiving the reflected and refracted waves. Since the refraction is
        a function of the frequency of the signal and the charge density, one
        may estimate the charge density at different places by considering the
        time delay between when each frequency was transmitted and when each
        frequency was received. These instruments are called ionosondes, and
        graphs of transmitted frequency versus time delay are called ionograms.
      </p>
      <br />
      <p>
        Unfortunately, ionosondes’ output data do not provide enough information
        to completely reconstruct the entire charge density gradient. Ionosonde
        can measure signals’ time of flight, but they cannot discern what paths
        the signals take. Existing ionosounding methods estimate charge density
        as a function of altitude by making simplifying assumptions about the
        path taken by the signal.
      </p>
      <br />
      <h4 className="title is-5" id="our-instruments">
        Our Instruments
      </h4>
      <p>
      <b>The ionosphere</b> is one of the outermost layers of our atmosphere, filled with
       ionized gases which reflect radio waves. Additionally, these ionized gases 
       in the ionosphere produce light in a phenomenon called “airglow.”

      </p>
      <br />
      <p>
      <b>To measure</b> the ionosphere’s environment, our satellite will be equipped with two
       payloads: the first payload is a photometer, which will measure the airglow so 
       we can extrapolate data on gas density in the upper atmosphere. Furthermore, we 
       will refine our data by detecting RF waves with an ionosonde receiver. This other 
       payload will monitor RF waves we transmit at different frequencies and determine 
       how they behave in the ionosphere.
      </p>
      <br />
      <p><b>More information</b> about both payloads can be found below. For specific questions 
        about the ionosonde payload, contact Ryan Tse, and for questions about the photometer 
        payload, contact Laura Cui. Lastly, for general questions, refer to our team head 
        Gautom Das.
      </p>
      <br />
      <h3 className="title is-5" id="optical-payload">
        Photometer (Optical Payload)
      </h3>
      <p>
      <b>Airglow</b> provides vital information on the environment of the ionosphere, namely ion
      density, electron density, and uncharged atom density. Our optical payload will measure
      the airglow, allowing us to produce a map of vertical electron densities in the ionosphere.
      Vertical electron density is exactly what it sounds like: electron densities that travel
      up through the ionosphere rather than across it. Information on vertical electron density
      is important because most current information about the ionosphere concerns horizontal
      electron densities. By collecting vertical data, our map of the ionosphere will be more
      accurate by accounting for all dimensions. Additionally, the photometer in our satellite
      will be equipped with a unique filter granting it increased sensitivity. Accurate vertical
      electron density data from this payload will be compounded with the RF payload to make a
      detailed 3D map of the ionosphere.

      </p>
      <br />
      <h4 className="title is-5" id="ionosonde-receiver">
      Ionosonde Receiver (RF Payload)
      </h4>
      <p>
      <b>Existing ground-based</b> ionosondes don’t provide enough information to accurately map electron
      densities within the ionosphere. More refined data can be obtained by transmitting signals
      to an ionosonde receiver in space. That’s where we come in. The ionosonde receiver in our
      satellite will record test signals relayed from our ground station once on the signal’s
      path into the ionosphere, and a second time after the signal bounces off the ionosphere
      back down to earth. The difference in time separating the points of convergence between
      the satellite and the signal will then be analyzed to develop a precise map of the ionosphere.
      </p>
    </div>
  </Layout>
)

export default Mission
