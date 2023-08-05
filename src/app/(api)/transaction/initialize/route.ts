import { NextResponse } from "next/server";
import { addCheckout } from "../../../../../lib/checkout";

export const POST = async (req: Request, res: Response) => {
    const { firstName, lastName, email, amount, narration, hallOfResidence } = await req.json()
    try {
        const checkout = { firstName, lastName, email, amount, narration, hallOfResidence, transactionID: Date.now().toString()}
        addCheckout(checkout);
        return NextResponse.json({ message: "OK", checkout}, { status: 201 })
    }
    catch (err) {
        return NextResponse.json(
            {message: "Error", err},
            {
                status: 500,
            }
        )
     }
};