//PlumDirectMarketing.com DNS Records
//As of 04/13/2018


//A Records

1.
	Host Record: @
	Points To: 162.144.16.50
	TTL: 14400

2.
	Host Record: localhost
	Points To: 127.0.0.1
	TTL: 14400

3.
	Host Record: autoconfig
	Points To: 162.144.16.50
	TTL: 14400

4.
	Host Record: mail
	Points To: 162.144.27.34
	TTL: 14400


//CNAME Records

1. 
	Host Record: www
	Points To: plumdirectmarketing.com
	TTL: 14400

2. 
	Host Record: ftp
	Points To: plumdirectmarketing.com
	TTL: 14400

3. 
	Host Record: imap
	Points To: mail.plumdirectmarketing.com
	TTL: 14400

4. 
	Host Record: pop
	Points To: mail.plumdirectmarketing.com
	TTL: 14400

5. 
	Host Record: smtp
	Points To: mail.plumdirectmarketing.com
	TTL: 14400

6. 
	Host Record: sip
	Points To: sipdir.online.lync.com
	TTL: 14400

7. 
	Host Record: lyncdiscover
	Points To: webdir.online.lync.com
	TTL: 14400

8. 
	Host Record: msoid
	Points To: clientconfig.microsoftonline-p.net
	TTL: 14400

9. 
	Host Record: autodiscover
	Points To: autodiscover.outlook.com
	TTL: 14400

10. 
	Host Record: go
	Points To: 2221659.group9.sites.hubspot.net
	TTL: 14400

11. 
	Host Record: blog
	Points To: 2221659.group9.sites.hubspot.net
	TTL: 14400

12. 
	Host Record: try
	Points To: go.pardot.com
	TTL: 14400


//MX Records

Priority: 0
Host Record: @
Points to: plumdirectmarketing-com.mail.protection.outlook.com
TTL: 14400

//TXT Records

1.
	Host Record: @
	TXT Value: v=spf1 include:spf.protection.outlook.com include:bluehost.com -all
	TTL: 14400

2.
	Host Record: smtpapi._domainkey
	TXT Value: k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPtW5iwpXVPiH5FzJ7Nrl8USzuY9zqqzjE0D1r04xDN6qwziDnmgcFNNfMewVKN2D1O+2J9N14hRprzByFwfQW76yojh54Xu3uSbQ3JP0A7k8o8GutRF8zbFUA8n0ZH2y0cIEjMliXY4W4LwPA7m4q0ObmvSjhd63O9d8z1XkUBwIDAQAB
	TTL: 14400

3. 
	Host Record: @
	TXT Value: k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDGoQCNwAQdJBy23MrShs1EuHqK/dtDC33QrTqgWd9CJmtM3CK2ZiTYugkhcxnkEtGbzg+IJqcDRNkZHyoRezTf6QbinBB2dbyANEuwKI5DVRBFowQOj9zvM3IvxAEboMlb0szUjAoML94HOkKuGuCkdZ1gbVEi3GcVwrIQphal1QIDAQAB;
	TTL: 14400


//SRV Records

1. 
	Service: _sip
	Protocol: _tls
	Host: *blank*
	Priority: 100
	Weight: 1
	Port: 443
	Target: sipdir.online.lync.com	
	TTL: 14400

2. 
	Service: _sipfederationtls
	Protocol: _tcp
	Host: *blank*
	Priority: 100
	Weight: 1
	Port: 5061
	Target: sipfed.online.lync.com	
	TTL: 14400



