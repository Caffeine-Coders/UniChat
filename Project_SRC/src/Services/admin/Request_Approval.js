// to set the data of the request for approval
export const NewRequest = async (
    schoolname,schooladdress1,schooladdress2,
    schoolcity,schoolstate,schoolpincode,schoolcountry, 
    schooladminFname,
    schooladminLname,
    schooladminemail,
    ) => {
        const res = await fetch(`/api/admin/approvalRequest`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                schoolname: schoolname,
                schooladdress1: schooladdress1,
                schooladdress2: schooladdress2,
                schoolcity: schoolcity,
                schoolstate: schoolstate,
                schoolpincode: schoolpincode,
                schoolcountry: schoolcountry,
                schooladminFname: schooladminFname,
                schooladminLname: schooladminLname,
                schooladminemail: schooladminemail,
                approvalStatus: "Pending",
            }),
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
        const data = await res.json();
        return data;
    }


export const getApprovalRequest = async (isApproved) => {
    const res = await fetch(`/api/admin/approvalRequest?ApprovalStatus=${isApproved}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    const data = await res.json();
    return data;
}

export async function updateRequest(schoolname, approvalStatus) {
    const res = await fetch(`/api/admin/updateRequest`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            schoolname: schoolname,
            approvalStatus: approvalStatus,
        }),
    });
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    const data = await res.json();
    return data;

}

export async function sendEmail(firstname, lastname, email, schoolname) {
    const res = await fetch(`/api/admin/sendEmail`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            firstname: firstname,
            lastname: lastname,
            email: email,
            schoolname: schoolname,
        }),
    });
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    const data = await res.json();
    return data;
}