import Challenge from '../model/challenge';

export const getAllChallenges =  async (req, res, next) => {
  try {
    const challenges = await Challenge.find();
    res.status(200).json({
      challenges
    })
  } catch(err) {
    console.log(err);
    res.status(400).send(err);
  }
}

// C
export const postCreateChallenge = async (req, res, next) => {
  const {
    body : {
      title, weeks, problems, startedAt, img 
    }
  } = req;
  try {
    const newChallenge = await Challenge.create({
      creator : req.user._id,
      title,
      weeks,
      problems,
      startedAt,  // "2020-01-01" String으로 받을 것.
      img 
    })
    res.status(200).json({
      message: "Success Create Challenge",
      newChallenge
    })
  } catch(err) {
    console.log(err);
    res.status(400).json({err});
  }
}

// R
export const getReadChallenge = async (req, res, next) => {
  params: { id }
    const { 
  } = req;
  try {
      const selectedChallenge = await Challenge.findById(id)
          .populate("creator") // 사용자 정보 얻어오기
          .populate("quizs") // 문제들 다 불러 오기
      // console.log(`읽기 : ${itinerary}`);

      res.status(200).json({
          message : "Success Read Challenge",
          selectedChallenge
      })
      // next();
  } catch(err) {
      console.log(`Read Challenge Error : ${err}`);
      res.status(400).json({err});
  }
}

// U
export const postUpdateChallenge = async (req, res, next) => {
  const {
      body,
      params : {id},
      user,
  } = req;
  
  try {
    const selectedChallenge = await Challenge.findById({_id:id});
    if(selectedChallenge.creator !== user._id)
      throw 'Not Author'

    const updatedChallenge = await Challenge.findOneAndUpdate({_id : id}, body);
    res.status(200).json ({
        message : "Success Update Challenge",
        updatedChallenge,
    })
  } catch(err){ 
    console.log(`Failed to Update Challenge ${err}`);
    res.status(400).json({
        message : "Failed to Update Challenge",
        error : err
    });   
  }
}

// D
export const getDeleteChallenge = async (req, res, next) => {
  const {
    params : { id },
    user
  } = req;
  try {
    const selectedChallenge = await Challenge.findById({_id:id});
    if(selectedChallenge.creator !== user._id)
      throw 'Not Author'

    await Challenge.findByIdAndDelete({_id: id});
    res.status(200).json({message : "Success Delete Challenge"})
  } catch(err) {
    console.log(err);
    res.status(400).json({err})
  }
}