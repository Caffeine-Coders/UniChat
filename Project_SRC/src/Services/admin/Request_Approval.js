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