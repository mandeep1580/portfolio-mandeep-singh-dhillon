import React from "react";
import { MDBTimeline, MDBTimelineStep, MDBIcon } from "mdbreact";

const TimelinePage = () => {
  return (
    <MDBTimeline>
      <MDBTimelineStep icon="check">
        <h4 className="font-weight-bold">Ut enim ad minim veniam</h4>
        <p className="text-muted mt-3">
          <MDBIcon icon="clock" aria-hidden="true" /> 11 hours ago
          via Twitter
        </p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </MDBTimelineStep>
      <MDBTimelineStep inverted color="warning-color" icon="credit-card">
        <h4 className="font-weight-bold">Duis aute irure dolor</h4>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </MDBTimelineStep>
      <MDBTimelineStep icon="credit-card" color="danger-color">
        <h4 className="font-weight-bold">Sed ut nihil unde omnis</h4>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
        ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
        consequatur? Quis autem vel eum iure reprehenderit qui in ea
        voluptate velit esse quam nihil molestiae consequatur, vel illum
        qui dolorem eum fugiat quo voluptas nulla pariatur?
      </MDBTimelineStep>
      <MDBTimelineStep inverted icon="save" color="info-color">
        <h4 className="font-weight-bold">Quis autem vel eum voluptate</h4>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos
        dolores et quas molestias excepturi sint occaecati cupiditate non
        provident, similique sunt in culpa qui officia deserunt mollitia
        animi, id est laborum et dolorum fuga. Et harum quidem rerum
        facilis est et expedita distinctio.
      </MDBTimelineStep>
      <MDBTimelineStep icon="thumbs-up" color="success-color">
        <h4 className="font-weight-bold">Mussum ipsum cacilds</h4>
        Nam libero tempore, cum soluta nobis est eligendi optio cumque
        nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
        autem quibusdam et aut officiis debitis aut rerum necessitatibus
        saepe eveniet ut et voluptates repudiandae sint et molestiae non
        recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut
        aut reiciendis voluptatibus maiores alias consequatur aut
        perferendis doloribus asperiores repellat.
      </MDBTimelineStep>
    </MDBTimeline>
  );
};

export default TimelinePage;