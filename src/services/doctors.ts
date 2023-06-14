import DoctorModel from "../models/Doctor"

const getAllDoctors = async () => {    
    return await DoctorModel.find().select("-password -role -_id");
}

export { getAllDoctors }