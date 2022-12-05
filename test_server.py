#!/usr/bin/env python3

from http.server import HTTPServer, SimpleHTTPRequestHandler

class CORSRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Headers','*')
        self.send_header('Access-Control-Allow-Origin', '*')
        SimpleHTTPRequestHandler.end_headers(self)
        self.send_header('Content-Type', 'application/json')
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Allow', 'GET, HEAD, POST, OPTIONS')
        self.end_headers()
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)
        print(body)
        self.send_response(200)
        self.end_headers()

httpd = HTTPServer(('localhost', 8088), CORSRequestHandler)
httpd.serve_forever()