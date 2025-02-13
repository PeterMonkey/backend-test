import { Schema, model } from "mongoose";

const movementsSchhema = new Schema({
    name: { type: String, default: null },
    creator: {
        user: { type: String, ref: "User", default: null },
    },
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
            value: { type: String, default: "$ 0" },
            lastValue: { type: String, default: "$ 0" },
            number: { type: Number, default: 0 },
            lastNumber: { type: Number, default: 0 },
        },
    }
})

export const MovementsModel = model("Movements", movementsSchhema)