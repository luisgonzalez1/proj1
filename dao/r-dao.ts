import aws from 'aws-sdk';
import {ConfigurationOptions} from 'aws-sdk/lib/config';
import { stat } from 'fs';
const awsConfig: ConfigurationOptions = {
  region: 'us-east-2',  
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
}

aws.config.update(awsConfig);

const dynamodb = new aws.DynamoDB();
const docClient = new aws.DynamoDB.DocumentClient(); // subset of functionality of dynamodb


export function getAllR():Promise<any>{

  return docClient.scan({ 
  
  TableName: 'reimburstments2',

   
  
  }).promise()
  
  }
export function saveR(r): Promise<any> {
    return docClient.put({
      TableName: 'reimburstments2',
      Item: r
    }).promise();
  }

export function getR(username:string , timeSub:string):Promise<any>{

return docClient.get({

TableName: 'reimburstments2',
Key: {
    username: username,
    timeSubmited: timeSub
  }

}).promise()

}

export function viewPending(username:string):Promise<any>{

  let status = 'pending';
  return docClient.query({

  TableName:'reimburstments2',
  IndexName:'username-status-index',
  KeyConditionExpression: '#user = :user AND #stat =:status',
  
 
  ExpressionAttributeNames:{ '#user':'username' , '#stat':'status'},
  ExpressionAttributeValues:{ ':status':status, ':user':username },
 
  }).promise()




}// end view pending

export function viewHistory(username:string):Promise<any>{

  let pending ='pending';
  let approved ='approved';
  let denied = 'denied';
  return docClient.query({

  TableName:'reimburstments2',
  IndexName:'username-index',
  KeyConditionExpression: '#user = :user',

  
  FilterExpression:'#stat IN ( :pend,:appr,:den)',
  
 
  ExpressionAttributeNames:{ '#user':'username' , '#stat':'status'},
  ExpressionAttributeValues:{ ':user':username ,':pend':pending  , ':appr':approved , ':den':denied},
  //:status':status,
  }).promise()




}// end view pending



export function updateStatus(r): Promise<any> {
  return docClient.update({
    TableName: 'reimburstments2',
    
    Key: {
      username: r.username,
      timeSubmitted: r.timeSubmitted
    },
    //#appr=:a
    //#time =:t
    UpdateExpression: 'set #stat=:s ,#appr=:a ',
    ExpressionAttributeNames: {
       
      '#stat': 'status',
      '#appr' : 'approver',
      // '#time' : 'timeSubmitted'
    },
    ExpressionAttributeValues:{
      ':s': r.status,
      ':a': r.approver,
      // ':t': r.timeSubmitted
       
    },
    ReturnValues: 'UPDATED_NEW'
  }).promise();
}