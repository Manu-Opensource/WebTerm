import pyte
import pty
import os

import sys
import io

sys.stdin = io.StringIO("echo \"Testing!!\"")

screen = pyte.Screen(80, 24)
stream = pyte.ByteStream(screen)
f = open('output', 'w')

def read(fd):
    data = os.read(fd, 1024)
    stream.feed(data)
    print(*screen.display, sep='\n', end='\n----------------------\n', file=f)
    return data

print('Script started')
pty.spawn('sh', read)
print('Script ended')
