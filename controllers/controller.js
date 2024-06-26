import Questions from "../modules/questionSchema.js";
import Results from "../modules/resultSchema.js";
import questionData, { answers } from '../database/data.js'


//get all quest
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.json({ error });
    }
}
//post quest
export async function insertQuestions(req, res) {
    try {

        const data = {
            questions: questionData,
            answers: answers
        };


        await Questions.create(data);
        res.json({ msg: "Data Saved Successfully...!"});
    } catch (error) {
        res.json({ error });
    }
}

//delete all  quest
export async function dropQuestions(req, res) {
  try {
	await Questions.deleteMany()
res.json({msg: 'questions deleted successfully..!'})
  } catch (error) {
	res.json({error})
  }
}

// get all result
export async function getResult(req,res){
try {
    const r = await Results.find()
    res.json(r)
} catch (error) {
    res.json({ error })
}

}
//post all result
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achived } = req.body;
        if (!username || !result) throw new Error('Data Not Provided...!');

     
        await Results.create({ username, result, attempts, points, achived });
        res.json({ msg: "Result Saved Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}
 
// delete all result
export async function dropResult(req, res){
	try {
        await Results.deleteMany()
        res.json({msg:'result delete successfully!'})
    } catch (error) {
        res.json({error})
    }
}