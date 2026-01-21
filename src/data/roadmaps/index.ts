import nahwu from "./nahwu.json"



export const roadmaps = [
        nahwu
]

export const getRoadmapByFieldId = (fieldId:string) => roadmaps.find(f => f.id === fieldId)