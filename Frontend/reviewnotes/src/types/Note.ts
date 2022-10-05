
export interface Note {
    assignees: AssigneeId[];//denne må endres
    isClosed: boolean;
    dueDate: Date;
    comments: string[];
    _id: NoteId;//denne må endres 
    title: string;
    description: string;
    sectionRef: string;
    type: string;
    status: string;
    priority: Priority;
    reporterId: ReporterId;
    createdAt: CreationDate;
    updatedAt: UpdateDate;
    
}
interface NoteId {
    $oid: string;
}

interface Priority {
    text: string;
    sortKey: number;
}

interface ReporterId {
    $oid: string;
}
interface AssigneeId {
    $oid: string;
}
interface CreationDate {
    $date: string;
}
interface UpdateDate {
    $date: string;
}
