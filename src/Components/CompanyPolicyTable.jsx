import React from "react";
const policies = [
  {
    id: 1,
    policyName: "Hivoco Information Security Policy",
    actions: "View Policy",
    status: "Completed",
  },
  {
    id: 2,
    policyName: "Hivoco's New Information Security Policy",
    actions: "View Policy",
    status: "Completed",
  },
  {
    id: 3,
    policyName: "Hivoco IT Asset Register Policy",
    actions: "View Policy",
    status: "Not Completed",
  },
  {
    id: 4,
    policyName: "Hivoco Physical Security Controls",
    actions: "View Policy",
    status: "Completed",
  },
  {
    id: 5,
    policyName: "Hivoco Power Backup Policy",
    actions: "View Policy",
    status: "Not Completed",
  },
  {
    id: 6,
    policyName: "Hivoco Logical Access Management Policy",
    actions: "View Policy",
    status: "Not Completed",
  },
  {
    id: 7,
    policyName: "Hivoco Change Management Policy",
    actions: "View Policy",
    status: "Completed",
  },
];

const CompanyPolicyTable = () => {
  return (
    <table className="w-full table-auto ">
      <thead>
        <tr
          style={{
            fontSize: "16px",
            lineHeight: "",
            backgroundColor: "#2A2A2A",
            color: "#fff",
            fontWeight: "600",
          }}
          //   text-lg
          className="
              text-white
              font-semibold 
             "
        >
          <th
            style={{ padding: "20px 16px", textAlign: "left" }}
            className="py-6 px-4 text-left"
          >
            SR NO.
          </th>
          <th
            style={{ padding: "20px 16px", textAlign: "left" }}
            className="py-6 px-4 text-left"
          >
            POLICY NAME{" "}
          </th>
          <th
            style={{ padding: "20px 16px", textAlign: "left" }}
            className="py-6 px-4 text-left"
          >
            ACTIONS{" "}
          </th>
          <th
            style={{ padding: "20px 16px", textAlign: "left" }}
            // className="py-6 px-4 text-left"
          >
            STATUS{" "}
          </th>
        </tr>
      </thead>
      <tbody>
        {policies.map((policy) => (
          <tr
            key={policy.id}
            style={{
              color: "#2A2A2A",
              //   lineHeight: "24px",
              fontSize: "16px",
              fontWeight: "600",
            }}
            className="text-[#2A2A2A] text-xl  font-semibold"
          >
            <td
              style={{ padding: "20px 16px", textAlign: "left" }}
              className="px-4 py-6 text-left"
            >
              {policy.id}
            </td>

            <td
              style={{ padding: "20px 16px", textAlign: "left" }}
              className="px-4 py-6 text-left"
            >
              {policy.policyName}
            </td>

            <td
              style={{
                padding: "20px 16px",
                textAlign: "left",
                fontWeight: "700",
              }}
              className="px-4 py-6 font-bold text-left"
            >
              <button
                className=""
                style={{ color: "#1658FF", textDecorationLine: "underline" }}
              >
                {policy.actions}
              </button>
            </td>

            <td
              style={{
                padding: "20px 16px",
                textAlign: "left",
                color:
                  policy.status.toLowerCase() === "completed"
                    ? "#00D100"
                    : "#FF2424",
              }}
              
              className={`px-4 py-6 text-left`}
            >
              {policy.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompanyPolicyTable;
