import { Schema, model } from "mongoose";

const lineSchhema = new Schema({
    name: { type: String, default: null },
    creator: {
        user: { type: String, ref: "User", default: null },
    },
    movementId: { type: String, ref: "Movements" },
    numbers: {
        sumPrice: {
            value: { type: String, default: "$ 0" },
            lastValue: { type: String, default: "$ 0" },
            number: { type: Number, default: 0 },
            lastNumber: { type: Number, default: 0 },
        },
        sumBudget: {
            value: { type: String, default: "$ 0" },
            lastValue: { type: String, default: "$ 0" },
            number: { type: Number, default: 0 },
            lastNumber: { type: Number, default: 0 },
        },
        budgetUtility: {
            value: { type: String, default: "$ 0" },
            lastValue: { type: String, default: "$ 0" },
            number: { type: Number, default: 0 },
            lastNumber: { type: Number, default: 0 },
        },
        budgetMargin: {
            value: { type: String, default: "0 %" },
            lastValue: { type: String, default: "0 %" },
            number: { type: Number, default: 0 },
            lastNumber: { type: Number, default: 0 },
        },
    }
})

export const LineModel = model("Line", lineSchhema);