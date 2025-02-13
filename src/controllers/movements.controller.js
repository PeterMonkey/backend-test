import { MovementsModel } from "../models/movements.model.js";

export const movementsController = {
    
    create: async (req, res) => {
        const {name, sumPrice, sumBudget, projectId} = req.body;
        const id = req.user.id;
        const budgetUtility = sumPrice - sumBudget
        const budgetMargin = (budgetUtility / sumPrice) * 100

        try {
            const project = await MovementsModel.create({
                name,
                creator: {
                    user: id
                },
                projectId,
                numbers: {
                    sumPrice: {
                        value: `$ ${sumPrice}`,
                        number: sumPrice
                    },
                    sumBudget: {
                        value: `$ ${sumBudget}`,
                        number: sumBudget
                    },
                    budgetUtility: {
                        value: `$ ${budgetUtility}`,
                        number: budgetUtility
                    },
                    budgetMargin: {
                        value: `${budgetMargin} %`,
                        number: budgetMargin
                    }
                }
            })
            return res.status(201).json({
                ok: true,
                project
            })
        } catch (error) {
            throw new Error(error)
        }
    },

    getMovements: async (req, res) => {
        const projectId = req.params.id

        try {
            const movements = await MovementsModel.find({
                projectId
            })

            if (movements.length === 0) {
                return res.status(400).json({
                    ok: false,
                    message: 'No se ha creado ningun movimiento en este proyecto'
                })
            }

            return res.status(200).json({
                ok: true,
                movements
            })
        } catch (error) {
            throw new Error(error)
        }
    },

    deleteMovement: async (req, res) => {
        try {
            const {ids} = req.body
            if (!Array.isArray(ids) || ids.length === 0) {
                return res.status(400).json({ error: 'Se requiere un array de IDs válido' });
              }

            await MovementsModel.deleteMany({ _id: {$in: ids} })
            return res.status(200).json({
                message: 'Elementos eliminados'
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}