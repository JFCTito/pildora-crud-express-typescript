import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('Fetching all entry diaries'); //get entry without sensitive info
})

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id)
    
    return (diary !== null)
        ? res.send(diary)
        : res.sendStatus(404);
})
/* 
router.post('/', (req, res) => {
        const { date, weather, visibility, comment } = req.body
    
        const newDiaryEntry = diaryServices.addDiary(´{
            date,
            weather,
            visibility,
            comment
        })
    
        res.json(newDiaryEntry)
        
})
 */

router.post('/', (req, res) => {
    try{

        const newDiaryEntry = toNewDiaryEntry(req.body)
    
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    
        res.json(addedDiaryEntry)
        
    } catch (e) {
        res.status(400)/* .send(e.message) */
    }
})


export default router;