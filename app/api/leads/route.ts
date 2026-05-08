
import {NextResponse, NextRequest} from 'next/server';


export async function GET(request:NextRequest) {
    
   
    const data =
[
{"id":1,"name":"John Carter","email":"john.carter1@mail.com","company":"FinEdge","role":"Frontend Engineer","posted":"2026-04-28","ai_insight":"Builds fintech interfaces, likely focused on performance and UX clarity."},
{"id":2,"name":"Ava Johnson","email":"ava.johnson2@mail.com","company":"PayFlow","role":"Backend Engineer","posted":"2026-04-30","ai_insight":"Works on payment systems, likely handling APIs and scaling challenges."},
{"id":3,"name":"Liam Smith","email":"liam.smith3@mail.com","company":"CloudSync","role":"Fullstack Developer","posted":"2026-05-01","ai_insight":"Balances frontend and backend in cloud tools, versatile skillset."},
{"id":4,"name":"Noah Brown","email":"noah.brown4@mail.com","company":"DataNest","role":"Software Engineer","posted":"2026-04-29","ai_insight":"Data-focused engineer, likely working on processing pipelines."},
{"id":5,"name":"Emma Davis","email":"emma.davis5@mail.com","company":"HealthBridge","role":"Frontend Engineer","posted":"2026-05-02","ai_insight":"Builds healthcare UI, likely prioritizes accessibility."},
{"id":6,"name":"Olivia Wilson","email":"olivia.wilson6@mail.com","company":"FinEdge","role":"Product Engineer","posted":"2026-04-27","ai_insight":"Bridges product and engineering, likely user-focused."},
{"id":7,"name":"Elijah Moore","email":"elijah.moore7@mail.com","company":"PayFlow","role":"Backend Engineer","posted":"2026-05-03","ai_insight":"Handles backend systems for payments, performance critical."},
{"id":8,"name":"James Taylor","email":"james.taylor8@mail.com","company":"CloudSync","role":"DevOps Engineer","posted":"2026-04-28","ai_insight":"Manages deployment pipelines and infrastructure reliability."},
{"id":9,"name":"William Anderson","email":"will.anderson9@mail.com","company":"DataNest","role":"Software Engineer","posted":"2026-05-01","ai_insight":"Works on backend services and data-heavy systems."},
{"id":10,"name":"Sophia Thomas","email":"sophia.thomas10@mail.com","company":"HealthBridge","role":"Frontend Engineer","posted":"2026-05-02","ai_insight":"Frontend dev focused on user-friendly healthcare apps."},

{"id":11,"name":"Benjamin Jackson","email":"ben.jackson11@mail.com","company":"FinEdge","role":"Fullstack Developer","posted":"2026-04-30","ai_insight":"Fullstack in fintech, handles both UI and backend logic."},
{"id":12,"name":"Lucas White","email":"lucas.white12@mail.com","company":"PayFlow","role":"Backend Engineer","posted":"2026-04-29","ai_insight":"Backend dev focused on payment reliability and APIs."},
{"id":13,"name":"Henry Harris","email":"henry.harris13@mail.com","company":"CloudSync","role":"Frontend Engineer","posted":"2026-05-01","ai_insight":"Frontend dev working on cloud-based dashboards."},
{"id":14,"name":"Alexander Martin","email":"alex.martin14@mail.com","company":"DataNest","role":"Software Engineer","posted":"2026-04-28","ai_insight":"Backend systems engineer working with large datasets."},
{"id":15,"name":"Mason Thompson","email":"mason.thompson15@mail.com","company":"HealthBridge","role":"Mobile Developer","posted":"2026-05-03","ai_insight":"Builds mobile healthcare apps, likely cross-platform."},
{"id":16,"name":"Michael Garcia","email":"michael.garcia16@mail.com","company":"FinEdge","role":"Frontend Engineer","posted":"2026-04-27","ai_insight":"Frontend fintech dev focused on smooth UI interactions."},
{"id":17,"name":"Ethan Martinez","email":"ethan.martinez17@mail.com","company":"PayFlow","role":"Backend Engineer","posted":"2026-05-02","ai_insight":"Works on scalable payment backend systems."},
{"id":18,"name":"Daniel Robinson","email":"daniel.robinson18@mail.com","company":"CloudSync","role":"Fullstack Developer","posted":"2026-04-29","ai_insight":"Handles both UI and backend for cloud apps."},
{"id":19,"name":"Jacob Clark","email":"jacob.clark19@mail.com","company":"DataNest","role":"Software Engineer","posted":"2026-05-01","ai_insight":"Focuses on backend data infrastructure."},
{"id":20,"name":"Logan Rodriguez","email":"logan.rodriguez20@mail.com","company":"HealthBridge","role":"Frontend Engineer","posted":"2026-04-30","ai_insight":"Frontend dev in health tech with UX focus."},

{"id":21,"name":"Jackson Lewis","email":"jackson.lewis21@mail.com","company":"FinEdge","role":"Backend Engineer","posted":"2026-04-28","ai_insight":"Backend fintech dev handling transaction systems."},
{"id":22,"name":"Sebastian Lee","email":"sebastian.lee22@mail.com","company":"PayFlow","role":"Fullstack Developer","posted":"2026-05-03","ai_insight":"Fullstack dev working across payment stack."},
{"id":23,"name":"Jack Walker","email":"jack.walker23@mail.com","company":"CloudSync","role":"Software Engineer","posted":"2026-04-27","ai_insight":"Works on cloud system performance and scaling."},
{"id":24,"name":"Aiden Hall","email":"aiden.hall24@mail.com","company":"DataNest","role":"Frontend Engineer","posted":"2026-05-02","ai_insight":"Frontend engineer for data dashboards."},
{"id":25,"name":"Owen Allen","email":"owen.allen25@mail.com","company":"HealthBridge","role":"Backend Engineer","posted":"2026-04-29","ai_insight":"Backend dev in healthcare systems."},

{"id":26,"name":"Samuel Young","email":"samuel.young26@mail.com","company":"FinEdge","role":"Fullstack Developer","posted":"2026-05-01","ai_insight":"Fullstack fintech engineer with product awareness."},
{"id":27,"name":"Matthew Hernandez","email":"matt.hernandez27@mail.com","company":"PayFlow","role":"Software Engineer","posted":"2026-04-28","ai_insight":"Software engineer working on payments core."},
{"id":28,"name":"Joseph King","email":"joseph.king28@mail.com","company":"CloudSync","role":"Frontend Engineer","posted":"2026-05-03","ai_insight":"Frontend engineer building cloud interfaces."},
{"id":29,"name":"David Wright","email":"david.wright29@mail.com","company":"DataNest","role":"Backend Engineer","posted":"2026-04-30","ai_insight":"Backend engineer for data infrastructure."},
{"id":30,"name":"Carter Lopez","email":"carter.lopez30@mail.com","company":"HealthBridge","role":"Fullstack Developer","posted":"2026-04-27","ai_insight":"Fullstack dev in health tech systems."},

{"id":31,"name":"Wyatt Hill","email":"wyatt.hill31@mail.com","company":"FinEdge","role":"Software Engineer","posted":"2026-05-02","ai_insight":"Generalist engineer in fintech platform."},
{"id":32,"name":"Jayden Scott","email":"jayden.scott32@mail.com","company":"PayFlow","role":"Frontend Engineer","posted":"2026-04-28","ai_insight":"Frontend engineer focused on payment UI flows."},
{"id":33,"name":"Gabriel Green","email":"gabriel.green33@mail.com","company":"CloudSync","role":"Backend Engineer","posted":"2026-05-01","ai_insight":"Backend dev building cloud services."},
{"id":34,"name":"Anthony Adams","email":"anthony.adams34@mail.com","company":"DataNest","role":"Fullstack Developer","posted":"2026-04-29","ai_insight":"Fullstack dev handling analytics UI + backend."},
{"id":35,"name":"Isaac Baker","email":"isaac.baker35@mail.com","company":"HealthBridge","role":"Software Engineer","posted":"2026-05-03","ai_insight":"Works across healthcare application layers."},

{"id":36,"name":"Grayson Nelson","email":"grayson.nelson36@mail.com","company":"FinEdge","role":"Frontend Engineer","posted":"2026-04-27","ai_insight":"Frontend dev focused on fintech UX."},
{"id":37,"name":"Julian Carter","email":"julian.carter37@mail.com","company":"PayFlow","role":"Backend Engineer","posted":"2026-05-01","ai_insight":"Backend engineer maintaining payment APIs."},
{"id":38,"name":"Levi Mitchell","email":"levi.mitchell38@mail.com","company":"CloudSync","role":"Fullstack Developer","posted":"2026-04-28","ai_insight":"Fullstack cloud app developer."},
{"id":39,"name":"Dylan Perez","email":"dylan.perez39@mail.com","company":"DataNest","role":"Software Engineer","posted":"2026-05-02","ai_insight":"Software engineer focused on data pipelines."},
{"id":40,"name":"Nathan Roberts","email":"nathan.roberts40@mail.com","company":"HealthBridge","role":"Frontend Engineer","posted":"2026-04-29","ai_insight":"Frontend dev building healthcare dashboards."},

{"id":41,"name":"Caleb Turner","email":"caleb.turner41@mail.com","company":"FinEdge","role":"Backend Engineer","posted":"2026-05-01","ai_insight":"Backend dev handling fintech services."},
{"id":42,"name":"Ryan Phillips","email":"ryan.phillips42@mail.com","company":"PayFlow","role":"Fullstack Developer","posted":"2026-04-27","ai_insight":"Fullstack dev working on payment systems."},
{"id":43,"name":"Andrew Campbell","email":"andrew.campbell43@mail.com","company":"CloudSync","role":"Software Engineer","posted":"2026-05-02","ai_insight":"Software engineer focused on cloud features."},
{"id":44,"name":"Joshua Parker","email":"joshua.parker44@mail.com","company":"DataNest","role":"Frontend Engineer","posted":"2026-04-30","ai_insight":"Frontend engineer for analytics UI."},
{"id":45,"name":"Christopher Evans","email":"chris.evans45@mail.com","company":"HealthBridge","role":"Backend Engineer","posted":"2026-05-03","ai_insight":"Backend engineer in healthcare systems."},

{"id":46,"name":"Isaiah Edwards","email":"isaiah.edwards46@mail.com","company":"FinEdge","role":"Fullstack Developer","posted":"2026-04-29","ai_insight":"Fullstack fintech engineer."},
{"id":47,"name":"Aaron Collins","email":"aaron.collins47@mail.com","company":"PayFlow","role":"Software Engineer","posted":"2026-05-01","ai_insight":"Software engineer working on payment core systems."},
{"id":48,"name":"Charles Stewart","email":"charles.stewart48@mail.com","company":"CloudSync","role":"Frontend Engineer","posted":"2026-04-28","ai_insight":"Frontend dev building cloud dashboards."},
{"id":49,"name":"Thomas Sanchez","email":"thomas.sanchez49@mail.com","company":"DataNest","role":"Backend Engineer","posted":"2026-05-02","ai_insight":"Backend engineer for data services."},
{"id":50,"name":"Adam Morris","email":"adam.morris50@mail.com","company":"HealthBridge","role":"Fullstack Developer","posted":"2026-04-27","ai_insight":"Fullstack developer in health tech."},

{"id":51,"name":"Eli Rogers","email":"eli.rogers51@mail.com","company":"FinEdge","role":"Software Engineer","posted":"2026-05-03","ai_insight":"Software engineer in fintech platform."},
{"id":52,"name":"Jonathan Reed","email":"jonathan.reed52@mail.com","company":"PayFlow","role":"Frontend Engineer","posted":"2026-04-30","ai_insight":"Frontend dev focused on payment UX."},
{"id":53,"name":"Hunter Cook","email":"hunter.cook53@mail.com","company":"CloudSync","role":"Backend Engineer","posted":"2026-05-01","ai_insight":"Backend engineer in cloud systems."},
{"id":54,"name":"Connor Morgan","email":"connor.morgan54@mail.com","company":"DataNest","role":"Fullstack Developer","posted":"2026-04-29","ai_insight":"Fullstack dev working on data tools."},
{"id":55,"name":"Jeremiah Bell","email":"jeremiah.bell55@mail.com","company":"HealthBridge","role":"Software Engineer","posted":"2026-05-02","ai_insight":"Software engineer in healthcare apps."},

{"id":56,"name":"Adrian Murphy","email":"adrian.murphy56@mail.com","company":"FinEdge","role":"Frontend Engineer","posted":"2026-04-28","ai_insight":"Frontend fintech engineer."},
{"id":57,"name":"Cameron Bailey","email":"cameron.bailey57@mail.com","company":"PayFlow","role":"Backend Engineer","posted":"2026-05-01","ai_insight":"Backend engineer for payment APIs."},
{"id":58,"name":"Jordan Rivera","email":"jordan.rivera58@mail.com","company":"CloudSync","role":"Fullstack Developer","posted":"2026-04-30","ai_insight":"Fullstack cloud systems developer."},
{"id":59,"name":"Robert Cooper","email":"robert.cooper59@mail.com","company":"DataNest","role":"Software Engineer","posted":"2026-05-02","ai_insight":"Software engineer focused on data infra."},
{"id":60,"name":"Angel Richardson","email":"angel.richardson60@mail.com","company":"HealthBridge","role":"Frontend Engineer","posted":"2026-04-27","ai_insight":"Frontend healthcare UI developer."},

{"id":61,"name":"Kevin Cox","email":"kevin.cox61@mail.com","company":"FinEdge","role":"Backend Engineer","posted":"2026-05-01","ai_insight":"Backend fintech systems engineer."},
{"id":62,"name":"Brandon Howard","email":"brandon.howard62@mail.com","company":"PayFlow","role":"Fullstack Developer","posted":"2026-04-29","ai_insight":"Fullstack dev across payment stack."},
{"id":63,"name":"Jason Ward","email":"jason.ward63@mail.com","company":"CloudSync","role":"Software Engineer","posted":"2026-05-03","ai_insight":"Cloud software engineer."},
{"id":64,"name":"Justin Torres","email":"justin.torres64@mail.com","company":"DataNest","role":"Frontend Engineer","posted":"2026-04-30","ai_insight":"Frontend engineer for data dashboards."},
{"id":65,"name":"Jose Peterson","email":"jose.peterson65@mail.com","company":"HealthBridge","role":"Backend Engineer","posted":"2026-05-02","ai_insight":"Backend dev in healthcare systems."},

{"id":66,"name":"Austin Gray","email":"austin.gray66@mail.com","company":"FinEdge","role":"Fullstack Developer","posted":"2026-04-27","ai_insight":"Fullstack fintech developer."},
{"id":67,"name":"Chase Ramirez","email":"chase.ramirez67@mail.com","company":"PayFlow","role":"Software Engineer","posted":"2026-05-01","ai_insight":"Software engineer for payment systems."},
{"id":68,"name":"Ian James","email":"ian.james68@mail.com","company":"CloudSync","role":"Frontend Engineer","posted":"2026-04-28","ai_insight":"Frontend dev for cloud platforms."},
{"id":69,"name":"Colin Watson","email":"colin.watson69@mail.com","company":"DataNest","role":"Backend Engineer","posted":"2026-05-02","ai_insight":"Backend engineer handling data services."},
{"id":70,"name":"Jaxson Brooks","email":"jaxson.brooks70@mail.com","company":"HealthBridge","role":"Fullstack Developer","posted":"2026-04-30","ai_insight":"Fullstack dev in healthcare apps."},

{"id":71,"name":"Kayden Kelly","email":"kayden.kelly71@mail.com","company":"FinEdge","role":"Software Engineer","posted":"2026-05-03","ai_insight":"Software engineer in fintech."},
{"id":72,"name":"Bentley Sanders","email":"bentley.sanders72@mail.com","company":"PayFlow","role":"Frontend Engineer","posted":"2026-04-29","ai_insight":"Frontend dev for payment interfaces."},
{"id":73,"name":"Zachary Price","email":"zachary.price73@mail.com","company":"CloudSync","role":"Backend Engineer","posted":"2026-05-01","ai_insight":"Backend cloud systems engineer."},
{"id":74,"name":"Parker Bennett","email":"parker.bennett74@mail.com","company":"DataNest","role":"Fullstack Developer","posted":"2026-04-28","ai_insight":"Fullstack dev in analytics platforms."},
{"id":75,"name":"Brody Wood","email":"brody.wood75@mail.com","company":"HealthBridge","role":"Software Engineer","posted":"2026-05-02","ai_insight":"Software engineer in healthcare systems."},
{"id":76,"name":"Xavier Barnes","email":"xavier.barnes76@mail.com","company":"FinEdge","role":"Frontend Engineer","posted":"2026-04-27","ai_insight":"Frontend fintech developer."},
{"id":77,"name":"Easton Ross","email":"easton.ross77@mail.com","company":"PayFlow","role":"Backend Engineer","posted":"2026-05-01","ai_insight":"Backend engineer for payments."},
{"id":78,"name":"Dominic Henderson","email":"dominic.henderson78@mail.com","company":"CloudSync","role":"Fullstack Developer","posted":"2026-04-30","ai_insight":"Fullstack developer in cloud apps."},
{"id":79,"name":"Jace Coleman","email":"jace.coleman79@mail.com","company":"DataNest","role":"Software Engineer","posted":"2026-05-03","ai_insight":"Software engineer working on data systems."},
{"id":80,"name":"Everett Jenkins","email":"everett.jenkins80@mail.com","company":"HealthBridge","role":"Frontend Engineer","posted":"2026-04-29","ai_insight":"Frontend engineer in healthcare UI."}
]
    return NextResponse.json({leads: data});
}