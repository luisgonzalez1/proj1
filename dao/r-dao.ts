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

export function saveR(r): Promise<any> {
    return docClient.put({
      TableName: 'reimburstments',
      Item: r
    }).promise();
  }

export function getR(username:string , timeSub:string):Promise<any>{

return docClient.get({

TableName: 'reimburstments',
Key: {
    username: username,
    time_submited: timeSub
  }

}).promise()

}

export function viewPending(username:string):Promise<any>{

  let status = 'pending';
  return docClient.query({

  TableName:'reimburstments',
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

  TableName:'reimburstments',
  IndexName:'username-index',
  KeyConditionExpression: '#user = :user',

  
  FilterExpression:'#stat IN ( :pend,:appr,:den)',
  
 
  ExpressionAttributeNames:{ '#user':'username' , '#stat':'status'},
  ExpressionAttributeValues:{ ':user':username ,':pend':pending  , ':appr':approved , ':den':denied},
  //:status':status,
  }).promise()




}// end view pending