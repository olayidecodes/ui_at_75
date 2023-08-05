type Checkout = {
    firstName: string
    lastName: string
    email: string
    amount: number
    narration: string
    hallOfResidence: string
    transactionID: string
}

let checkouts: Checkout[] = [];

export const getCheckouts = () => checkouts

export const addCheckout = (checkout: Checkout) => {
    checkouts.push(checkout)
}
