manyToOne -> 
          course: // doctorine will add course_id to db table voucher
            targetEntity: Hcpd\CourseBundle\Entity\Course // entity which we want to add One to Many 
            inversedBy: voucher // entity vocher 
            cascade: ["persist", "merge"]
  
manyToOne 
  course // one association only one course_id
  voucher // mutiple voucher table records can have same course_id as foreign key. 
