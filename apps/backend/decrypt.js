import { JWEDecrypt } from 'jose/jwe/decrypt';
import { parseJwk } from 'jose/jwk/parse';

async function decryptJWE(jweToken, privateKey) {
    try {
        // Parse the private key (must be in JWK format or PEM format)
        const key = await parseJwk(privateKey, 'A256GCM');

        // Decrypt the JWE token
        const { plaintext } = await JWEDecrypt(jweToken, key);

        // Convert the plaintext to a string (assuming the payload is a JSON object)
        const payload = new TextDecoder().decode(plaintext);
        return payload;
    } catch (error) {
        console.error('Failed to decrypt JWE:', error);
        return null;
    }
}

// Example usage
const jweToken = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..sqy5lYfnM757_2vn.WJTW7hRvmLw6cTOR0613HPWL5PKQUYev9yCoXtMaaEDHjc_XWMDhqP1KXSHUuvsI7qOMAv8lX1FMW2TifTjRhYgioUFi2XDkCt5we5hdVl1CAnwb7LrL2GWEFylfqx5TklWDNpX9eGgbn09BIUgBqnck3dR6Cod046u_9V1MC-Nc64-SdOQJJmBAG6aPie57TrW5_0RC3OlBqDhXVdo9UqqGxb5WZB3lVmL1KR6I-AUNdVxkx-W758c8YOQnCB1cC_h2WdmoniCe2WfaRMKeaiq5Y9IpgWIPAI1crnByOTIie_s._XqyVNMsPefMsWUqSl86YQ";

// Replace this with your actual private key in JWK format
const privateKey = {
    kty: 'oct',
    k: 'your-base64-encoded-shared-secret', // Replace with your actual key
    alg: 'dir',
    enc: 'A256GCM'
};

decryptJWE(jweToken, privateKey)
    .then(payload => {
        console.log('Decrypted Payload:', payload);
    })
    .catch(error => {
        console.error('Error:', error);
    });