
const API_BASE_URL = process.env.NODE_ENV === "development" ? "https://localhost:5001/api/" : "https://accounting-app.azurewebsites.net/api";

const CUSTOMER_API_URL = API_BASE_URL + "Customer/";

const ACCOUNT_API_URL = API_BASE_URL + "Account/";

export const getAccounts = async (id : string | null) => {
    const response = await fetch(CUSTOMER_API_URL + "GetAccounts?id=" + id, {
        headers: {
            Accept: "application/json",
        }
    })
        .then((res) => res.json()).then((res) => res.accounts)
        .catch(() => console.log("didn't find the id"))

    return response
}

export const getCustomers = async () => {
    const response = await fetch(CUSTOMER_API_URL + "GetCustomers", {
        headers: {
            Accept: "application/json",
        }
    })
        .then((res) => res.json())
        .catch(() => console.log("didn't find the required customers"))

    return response
}

export const deleteAccount = async (id : string | null) => {
    const response = await fetch(ACCOUNT_API_URL + "DeleteAccount?id=" + id, {
        headers: {
            Accept: "application/json",
        },
        method: "DELETE"
    })
        .catch(() => console.log("didn't find the id"))

    return response
}

export interface PostAccount{
    accountType: string | null,
    accountLabel: string | null,
    accountAmount: number | null,
    accountDate : string | undefined,
    customerID : string | null
}

export const addAccount = async ({accountType:type, accountLabel: label,
    accountAmount: amount,
    accountDate : date, customerID : id} : PostAccount) => {
        const body = JSON.stringify({ accountType:type, accountLabel:label, accountAmount: amount, accountDate: date, customerID : id })
        await fetch(ACCOUNT_API_URL + "AddAccount?id=" + id, {
            body,
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json"
            },
            method: "POST",
        })
}

export interface PostCustomer{
    customerID : string |null,
    customerLabel: string | null,
}

export const addCustomer = async ({customerID: id, customerLabel: label} : PostCustomer) => {
        const body = JSON.stringify({ CustomerID : id, customerLabel: label })
        await fetch(CUSTOMER_API_URL + "AddCustomer?id=" + id, {
            body,
            headers: {
                Accept: "application/json"
            },
            method: "POST",
        })
}


