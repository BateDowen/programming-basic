function Hospital(input) {
    let startDoctors = 7;
    let period = Number(input[0]);
    let treatedPatients = 0;
    let untreatedPatients = 0
    for (let i = 1; i <= period; i++){
        if (i % 3 === 0){
            if (untreatedPatients > treatedPatients){
            startDoctors +=1;
            }
        }
        let dayPatients = Number(input[i])
        
        if (dayPatients > startDoctors){
           untreatedPatients += (Math.abs(startDoctors - dayPatients))
        } 
        if (startDoctors - dayPatients > 0){
            treatedPatients +=  dayPatients;
        } else {
             treatedPatients += startDoctors;
            }
       
    } console.log(`Treated patients: ${treatedPatients}.`)
    console.log(`Untreated patients: ${untreatedPatients}.`)

}
Hospital (["4","7","27","9","1"])