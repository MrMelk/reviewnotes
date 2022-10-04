import { Request, Response } from "express";
import reviewnotes from "../MockData/dummy-data-reviewnotes.json"
import users from "../MockData/dummy-data-users.json"

export const getReviewNotes = async(req: Request, res: Response) => {
    res.status(200).send(reviewnotes);
};

export const getUsers = async(req: Request, res: Response) => {
    res.status(200).send(users);
}