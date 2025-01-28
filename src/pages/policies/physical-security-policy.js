import React from "react";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";

const PhysicalSecurityPolicy = () => {
  return (
    <div className="pt-14 px-14">
      <H2>Hivoco Physical Security Controls Policy</H2>
      <div className="flex flex-col">
        <SPAN>Version: 1.0</SPAN>
        <SPAN>Owner: Chief Security Officer (CSO)</SPAN>
      </div>

      <DIV>
        <H2>1. Purpose</H2>
        <SPAN>
          The purpose of this document is to outline the physical security
          controls implemented at Hivoco to protect personnel, assets, and
          sensitive information from unauthorized access, theft, and
          environmental hazards.
        </SPAN>
      </DIV>

      <DIV>
        <H2>2. Scope</H2>
        <SPAN>
          This policy applies to all Hivoco facilities, data centers, and remote
          offices, including:
        </SPAN>
        <div>
          <LI>Office premises</LI>
          <LI>Data storage locations</LI>
          <LI>Third-party managed facilities</LI>
          <LI>Cloud service provider data centers (AWS, Google Cloud)</LI>
        </div>
      </DIV>

      <DIV>
        <DIV>
          <H2>3. Physical Security Measures</H2>

          <SPAN className={"!font-bold"}>3.1 Access Control Measures</SPAN>

          <div>
            <SPAN className={"!font-bold"}>
              Access Control & Security Personnel:{" "}
            </SPAN>
            <LI>Only authorised personnel have access to the premises</LI>
            <LI>
              Trained security guards monitor key locations and conduct random
              patrols
            </LI>
            <LI>
              Security personnel verify visitor identities and grant access only
              to authorized personnel
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>3.2 Surveillance and Monitoring</H2>

          <SPAN className={"!font-bold"}>CCTV Surveillance:</SPAN>

          <div>
            <SPAN className={"!font-bold"}>CCTV cameras:</SPAN>
            <LI>CCTV cameras are installed at all entry/exit points</LI>
            <LI>
              Cameras record 24/7 with footage stored securely for 90 days
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>3.3 Environmental Controls</H2>

          <SPAN className={"!font-bold"}>Fire Protection:</SPAN>

          <div>
            <SPAN className={"!font-bold"}>Fire suppression systems:</SPAN>
            <LI>Fire suppression systems are installed and tested regularly</LI>
            <LI>Fire drills are conducted quarterly to ensure preparedness</LI>
          </div>

          <SPAN className={"!font-bold"}>Climate Control:</SPAN>

          <div>
            <SPAN className={"!font-bold"}>Air Conditioning systems:</SPAN>
            <LI>
              Air Conditioning systems are in place to maintain optimal
              temperature and humidity levels in data storage areas
            </LI>
            <LI>Systems are monitored and maintained regularly</LI>
          </div>
        </DIV>

        <H2>3.4 Policies and Procedures</H2>
        <SPAN>
          <strong>Visitor Management:</strong>
          <br />
          Visitors are required to register at the reception and must be
          accompanied at all times.
          <br />
          Visitor logs are maintained and reviewed regularly.
          <br />
          <strong>Clear Desk Policy:</strong>
          <br />
          Employees are required to lock away sensitive documents and devices
          when not in use.
          <br />
          Unattended workstations must be locked and secured.
        </SPAN>

        <H2>3.5 Audits and Compliance</H2>
        <SPAN>
          <strong>Security Audits:</strong>
          <br />
          Quarterly audits are conducted to assess compliance with security
          policies and identify areas for improvement.
          <br />
          Reports are reviewed by senior management.
          <br />
          <strong>Compliance Standards:</strong>
          <br />
          Hivoco adheres to ISO 27001 and NIST standards for physical security.
          <br />
          Compliance checks are performed annually to ensure alignment with
          regulatory requirements.
        </SPAN>
      </DIV>

      <DIV>
        <H2>4. Reporting Security Incidents</H2>
        <SPAN>
          Employees must report any physical security incidents, such as
          unauthorized access attempts or equipment theft, to the IT Security
          Team at <a href="mailto:security@hivoco.com">security@hivoco.com</a>.
        </SPAN>
      </DIV>

      <DIV>
        <H2>5. Review and Updates</H2>
        <SPAN>
          This policy will be reviewed annually or in response to changes in
          regulatory requirements or operational needs. Updates will be
          communicated to all employees.
        </SPAN>
      </DIV>

      <DIV>
        <H2>Approval</H2>
        <SPAN>Approved by: Krishna Murari Yadav</SPAN>
        <SPAN>Title: Chief Security Officer</SPAN>
      </DIV>

      <DIV>
        <SPAN>End of Document</SPAN>
      </DIV>
    </div>
  );
};

export default PhysicalSecurityPolicy;
