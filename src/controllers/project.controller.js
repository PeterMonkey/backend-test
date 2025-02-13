import { ProjectModel } from "../models/project.model.js";

export const projectController = {
    
    create: async (req, res) => {
        const {name, sumPrice, sumBudget} = req.body;
        const id = req.user.id;
        const budgetUtility = sumPrice - sumBudget
        const budgetMargin = (budgetUtility / sumPrice) * 100

        try {
            const project = await ProjectModel.create({
                name,
                creator: {
                    user: id
                },
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

    getProjects: async (req, res) => {
        const id = req.user.id;

        try {
            const projects = await ProjectModel.find({
                creator: {
                    user: id
                }
            })

            if (projects.length === 0) {
                return res.status(400).json({
                    ok: false,
                    message: 'No has creado ningun projecto aun'
                })
            }

            return res.status(200).json({
                ok: true,
                projects
            })
        } catch (error) {
            throw new Error(error)
        }
    },

    deleteProjects: async (req, res) => {
        try {
            const {ids} = req.body
            if (!Array.isArray(ids) || ids.length === 0) {
                return res.status(400).json({ error: 'Se requiere un array de IDs válido' });
              }

            await ProjectModel.deleteMany({ _id: {$in: ids} })
            return res.status(200).json({
                message: 'Elementos eliminados'
            })
        } catch (error) {
            throw new Error(error)
        }
    },

    searchProyect: async (req, res) => {
        try {
            const {q} = req.query

            if (!q) {
                return res.status(400).json({ message: 'No se encuentran coincidencias' });
              }

            const query = {
                $or: [
                    { name: { $regex: q, $options: 'i' } }
                ]
            }

            const projects = await ProjectModel.find(query)

            return res.status(200).json({
                projects
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}