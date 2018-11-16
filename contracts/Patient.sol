pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;

contract Patient
{

struct PatientDetails
{
uint patientId;
string healthIssue;
}

mapping (bytes32 => PatientDetails[]) public patientMap;

function addPatientDetails(bytes32 patientName,uint patientId,string healthIssue) public returns(bool success)
{
PatientDetails memory record;
record.patientId = patientId;
record.healthIssue = healthIssue;

patientMap[patientName].push(record);

}

function getPatientDetails(bytes32 patientname) constant returns (string) {

    return patientMap[patientname][0].healthIssue;
  }
}