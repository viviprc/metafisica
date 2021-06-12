<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto mb-3" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFhYZGBgZHBweHBocHSEaHhweHBoaHBwaGhweIS4lHB4rHxoaJzgmKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QHhISGjQrJSQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQ0AuwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAQIHAAj/xAA7EAABAwIDBQcCBQMEAwEBAAABAAIRAyEEMUEFElFhcQYigZGhsfATwTJS0eHxBxRCFiNichUzU4Ik/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQEAAgMBAQEAAAAAAAAAARECITEDEkFhcUL/2gAMAwEAAhEDEQA/AKc5kk9T7rApqVmZ6n3U4pqFgvprP00YWLQ00aAZpr300XuJdj6z/wADBJ1PCdOqBJobGY0NO6BvO14DqldWq95gzB0GSa4fZJIB8+M/wSj24EWkcdOWvzRGq8QiwuGkc9DqP1uES/DA5CDn15j5qnbcK0E6T739FgUmmwHTr806o0tJnYGZtB+QVo3B8oyDhwM2Pn6KyNpiBA+ft9151FmoztPtKC1WsRgTEgQR78PnLih2Pe3KenBWqrSEdR+on28QEG/DtPhPiEaqUvw+LJFxfyRtMhwkLR2DAMDT4PBSOwhs4SDHyUtKyN/prX6SLptmxF/mS3+khOAfpLxpo76S8aSDAFix9NHGmstpIANtNbtCmqNhRBOEkYbnr90dSul7Mz1PujqKVOJTTWPpoprJWTT5KdMDUAAk5IHZuF/E90d4z19PBG7TIYw29T78FPsZheN64aMrRJi/OLI0/wA15lBzshA5qVmAjU/NU0bTW4pKom0mqYGc/kKRmEATQ0Fg0Ey0t+gFh9AFHmksGmkZa+gEO7CAJq+n/CjfTSEKDhBmsMaWmOX6JoWLV1IQUjBMbvaeI+3qtmwbcExw1IboI6Ec/knxUeKwl95uRumAppLH00XTYTY5/Lrb6SCBfSWrmQjixC10ABWUMqasoIVQmzPxHqfdH0UCzM9T7o6glTMaBRG5bJC0HI6mbKKovr4MVHNYcpkjjF4PLJOcNhgBAGSEwTSahEZCSfGwhP6dBPkugjaK3FBGtpKQU1cSX/RWppJmaSifS5J3AWmnyQ9RiaOZ8+aod9L54qKcLdz55rDqcow01qafJTqgRoLZtBG0KZPyEd/aiJ+dU4VIqNMMJHH9fcKXEUSRIM8CPutsayHaW8/3XmmMiJtxvw+3glp4Wvc5hBItr+oRIAIkcERi8KHti3h+qCwtAslugNr/ACEaeeGtVA1UdWQNQpxNB1kMp6xUCuJbMFz1Puj6IQLMz1Puj6ASog6gEdSuhKCY0Aoq492fG/UqmLBzWjwaD7k+Ss7MPy+WSLsvS3X1p/OSOhY02VtYzonyOvYNtFSfRRYYtxTCpAAU/nitH0uSPNOCtHtHigFjqQ4fLKB9OwRdU9fkfuvMpT6dPllGqwsNK/yYWlRgCaf23zz9EPXw05oOFlJwB5I7MXyQf090wLj55IgOnj8iEp0qwk224scD6WFpOR5FLcLiLxvWJgAiCMrdM/dWLG0O45r7jP3kdc8lRMS8MqBptcSDnqJnUTqj20552YvGFYGi8X+Ta3kh65bvWj9VpSxTS1rTaBl5WBzlbPjMev6IiOpgLEBLaxTLEJdWCqM6CqBQoiqh1cSyz8R6n3TCggW5nqfdG0M0qIZ0NEyotS7D6JjSdkpqo2w20WYc1HvcAN4dTDGCwzKxhv6j0S8t3HxFjEzzI0SraOz21XmxdIAImAB15H1AyUh2Vg6DC2r9NryJAa3eeSP8gSXO8ktazmfq04ftfhnyA4TqJkjwBJ4DxTbAbUY8S14NwPMWB4GxtyXFtp06DHhppuaGx3g19N1uIdvCem6eMEI3YGJ+i9rm1A9hIgyQRrBFw0TMgnSdUefar8cvp2yrTJIIynNKsdiQzeJsBr8spMPtao+mCykwx+as1p/42guEi/eDSFzTtjt9/wBR1MjdMxLXb4dpwF/0CL59I44tvk22n2ypsEBwcT+EceZy3RE3MTNhCEpdsq9tyg5wMGIJi5yLeWn8qjYDaTqL98RvXG8ROfDjlmfJWTZ+LpOBfiMViQTkwVBTG7JAAbv70SMgAIhF5xteZDJ/bWqyRVpPYAJndIvAImRlPd8J1T3Y3ayjVO65zQchB/F4aXslFPatEN3BXL2QRuVnfUbkRAe6d0kflcIvCUbQ2HSe0VcOdxrnbrmC+4+N4CxFiJ3XR/iRmkn6y+46ZiKDX94Z8eP6LRmH4Z8kg7OY2o0CnVcXEfhcc4EDL9P0m0sr02tlz2Nzs5wHDQ9VLO82ANo4c7hE3jO2a5VtZm++CIMZHQ6jrrPJ3FdH272mwwpvDazCb/h3nDPIkCOS5ntDalNz3OaHOJBExI0IPUGfNVzutfjlk8n+ynbjBMyIABPQTyz9E1p1N5oGca8LKh19ovLoDHNcYIGRcMx4ayrX2e3wzviHfZPMT3P0XXGiW1gmlcpdXCqMKXVFEpqqhVRLzMz1PujqCCbmep90bRKVEM8OFFjdouYO6Lcc9d2AOJmRplcTaTDo5mSmrjXZG8QXEi7ieNnNaR4DIclT9q7Equq1nVHbriSWAuIa7duBvERG5IHDeEkXV52PSAe6mcj3m8xl7g25pw3Zk53HA3nI65BTLZ6afaOdbH7Nl++7ED6Y3YYxh3SXTIfugnKdY0UuB2Q9jSSN6HwHDuuiTaQZbIE5C5bGZK6vQ2WGt3RZv5WjdHoM+aFqbMaXsaAAGu33cwAYHi4jwCLaqdmmyKG5hqbTG8GDe0l0S48jvE+a4724Y6piw6LS0eZsZ0F+K7Tj6hbTPTT4FyvaFL6jyCYnIyOeukR+5RblHxXzap2C7PVarwxoEk55i0A2A5hWvF9jt1rGsO7UaxzXvLT3yTchwBDTuvc0g2jdvNhZNk0u+DugPF3tF91xN3N1LDnawJI0CtL8MHjeiHfCTKPtafXfly8dlKbsOWNYXVQS4vaCAAGgQN6N6wBgxJKg2JsjE0HPa4NcwND2gkOB3HtMEAyLOfYxmfzErpjME/eJDnGZBvAyNslgYMARAg8s75f8rpbS+6pipVxFmMqU2gkAnuyBPJ2kf5RYAJzhNgUx33gOdxzdp/mSXaRbgnrMIAI1HmPRS1qcN+WRib1+RWsds2kbNpsuIJIDjnMbzrhVdmwQ0u3miGARA7pzG6J5gOJ6cFc8Uw3+aofHgNoPdwBJP/VJU6sjmHaHFOa8R+N1geABgGNLk+SUYDadWlUEucRI3muJIKY0Nyu99VzpMw1vATAJ6/dR7Vwp/uWtGrWn0Wkz0di7Ey0HiEBXCZBhDAOX2QGICcc1LaxQ6IxDUOrTXmZnqfdHUQgW5nr90dhyppwxwwTCkbJbRblI+WTGifnwKKuGeBw7Xi5ILTLXDMQPb5zT/APIIDxNvxDK/LMeZSXZov8AOCsOAbz0yQKYVHWhonnoJ1OaHo0gCRJJ155WgZCyJrVoHh5oDD40BxPHIcYzjzSognazCWHofa3guT7eY+k8y0tmekQY0zPLirz2k7TspMNwXf4gamSI5ZEqiDtXTrPDasb0jvcwcsoRfN2Nvjln4N2DjRWe1ryWuGR/yF7mRcaC/JdKwjH7oB3XjQmxPWIBXKNpUGUsSx9My1zA4xx3iDnNvwjgun7B2h9Sm3jrHHklPY+WeJYZtqWsyPmeqCrVADJHyyIfiI+cpz+6X4p40Ot/DlqbJ2sZGXY1oHsohi5Ppw1S2vaQDPP5C1oVP56xI5KdXifFG5+dYQO1sS1mFrufEFjxE8oHqUU9036X1/ZVntjs/EYgU6dKzCZeZAzIgEa2uiezkUPZGGJ3YGZ+4VppbO+piN85Ma0HqJP3CJ/8KMJDWy90DdnIEzKbbMwm5TvdzjJPM5q92n1148IazbJbXTWulWICtgWV0Kiq6FVJrVhuep90dQKXtzPU+6Pw4U1UM6CYUBZAUNEbScpqob7PMHwVgwz4y+fsqzgnwR8+ZKwUatojIfISFguuSRAuTz9ghNqbA+qxgD3Mew7zHtsQYgi+YIzU1Cqd6fLz9xkmVOrJvGfy8JTye2enNO0/YKqe/RqOcTI3KjpznJ2QtpCpNXsrVYJdAOUXtlfLmvoKu8EgZz+qWbUwDHth0XE5Cb+HwI2z005+W+Ncs2FhXNG89286AGiIhok2AzEkq6bBrFr4vu6gD5n91PW2KxoBBgwfcZcSi9nYMNO9bW2duIU+dV11KYYivFvmXVKcTivPKJy9uXkj8fqW/tllzVYxLzJ+/wBrRxKLUczRdTEAixBubfdRUnEc4tb7cBdLKT4OeupHiPK6a4NltbcukSEl2YLpTN9Jy0191s7DioxrjnBBjiD3TI6keIQ2Ne4U37kbxbAkau7v3QGycbiWf7TqLyfS83BNtAiJs8aYNe2p3SO80wNNb/db1mwIU9DClpLnAbxOQyH7qLELXlh1SfEpXXTTEBKsSqIsrhCoquhVRVEw3PU+6YYdLmnvHqfdHUSpqjagUbScl1B0wjqZUVUHUHXVg2cN4a2CrlC6ebKxAa4fzwSVfRhiwWCR8vmkzO0jGmNyo6eDHuHmLEX6K4UqTHwDBj+QpK+HaL+iMKdT9I8H2kp3L2PYQJ7wiBneciLKr7X/AKhMe/dw9B9SDG8Lz0AmVccRjqLO4d/W0T1mxnP7IevtGiQd0PF4kNImeoiIRp85u45rW7b1Ae/RcDazgW6icxlpHRNNh9ri97WOY5m8bd0gSRYAx16ymWJxDHFzWUDJkb5M6tE+g4ZInY+xmA7z2CT58dM1OxtbznmLDRob7bCZA1/4jPjqPFKNpYLddY6nMfaOBVuwbQG5R5C0ZR5KvbbqjfzE5fon1PDHnryquJohrtQZ8Iv8jkiKFWB/CHxlYEnwPhJ8rof60W0+ceiltmnLYdY8QR4EnXwTrZ4sSOSrODrbzvurTgGwyRx+3RPn2z79NcSleJTTElKsQVqxK8SUoxKaYkpRiXJguroZT11AqTQ7PxHqfdHUSgWHvHqfdG0SpqoZUExoJbh0wpOUVY+kbhF0nXkH5ZAUTzQm3NsNoMJzeRZus2ueSir5mr1sraMQCY4/JT2liA5cs7I7Re+gKrwSA7dc48bHe8lftmYwOggiFXNsuVPfOUzOAa47zhf1zWtXZzDpA4eqJa6dfL9ll9QDVaZzjPaSV8FoMuWnGIUVOnFhPCB1mPUFNalZsft0iUtxOMaJ5+E/dZ2RctrNbHGmw9LHjnz9VSdrbTMkzOd9dM50R+2NoF0kTAyFjlaLW9JVOxuKMnlkBefW6n22+PkXh6pccx88eKkaQTmOqVNxYa0CR4cLfZF4KtvdBr5ZIxrYsWzKXh/KuWHHcA6TpdVnYw3ntbxIjzTDCY//APpr0DmxwLf+pA/hPlz9+ReKSrEJrXdKVYgrRiUYlKMQE4xCVYhMFNYIdFV0MqTQ7PxHqfdHUAgaf4j1PujaTlNVDCloi6R1SPEbWZTFzJ4DNJcXtt77Dut9fFT9bWvPNqzbU7Qspd1nef6DwVQxmIfVdvvMn2H6KJrdTcn5mpJmAGwOM58fVXOZHRzzI7D/AEupNfg3scJG+QRHENsB0hMMXgKmGcXMBLDwJkfoEn/pFiQWV6drOY4eLQJ82roZbY2kdFnZtc/XV56ql4TtPuv3SY6yNeaKft4OdJNtPMkE+WfRGbY7NMeC5g3XXtob6foqrW2ZUY4gwbnNotnyuouxU+vQzG7dtLZMQQMpm/sPRIsVtw7svOcWnOSLgcDdZx2BqkC+5yAAzyM256pBXwG7cmTrPKcznCJ5a888i37Sc8ENmCPxai2YvlPuUJiKO664PUSPBSYMgZnKRfSBmBHuinhrjAyv5p+l+iSCSeuV/FNtl0ycp+dPl1IzCCTlp9wfsrt2Y7NTFR7YGjTmbC54BFu+C67kg/slsotb9R4gkd2euedrKg9rdouobTe9mgZOdx89l2djYERECy4J2oxH1cXXfpvkAyLhnd99FfPM9Mfiv26tq/7L24zEMlpvq05hb4hcqwtd9N28wkER9lbNndpmvAa/uuFidDpYp+kd/Hl8GeJKV4gplUqAiQZSzEBNkWV0Mia6GVJpTW2g1hOpk+6Cr7Re6wMDkg6g7zup91gDREkbcxuy5vKKpvi2eWqhYd3mpG5XGZKbXkTUpwDpAt8z0WuGpSbg2y81uDImBy1ylF0mbskG8QYgC/M6ylrWLZ/TOqaWMAMhtZhbfVze83pYOXZgLfP0XB8JUNI0q4zY9jjPAHvADhug+a7wxwIBGt/A5LKXa5/mnmVkhRVsK1+YuNVOVoG+Itp+/FUxV/amxgW2gjkqLtrYr2Ekiwve488vBdaaMpVd7WsotpS97Ke8YDnHdaJzJi/7lTefGxpx3dxyCswtAk2k6k5JjsPC1a7t1jS/8x/xaczLshYZZ8ld9idmsJXbIrMr7uYputMWkzPsrdRwDKbQxjGsaMg0QPniiTw16+WZkIdhdmmUoc/vv4x3R/1H3VnY3586qNjIUzW6p8xz9dW3yD2zihRoVKpiGMc7yC+e2yWh5BJcS4niTc+C6t/Vzaf08KKQMOqvA/8Ay07zvCwHiubiiAxoi4AyjTVVfDo+GZzpeM7AfNVruqeszpwyE8pQ7D6W/dC6mw+06lK0yOBPsm2G2uyoOB4JJVYCEs3908wiMOuZVtrGUOkdHaLm2JkJxRdvNDuIVMbMVdze87PM+5UlKjr86rRwlzhzPuiN05DpZFbRn6I4lbNZbW/pzWaU5EdeHFENbcWgT5DpqjVxmmyYHHWNLzoj8O3Mk2EgG1j+yHYCZtbjy1COwlDeAaBlfLM6eCi1rKMrPO45ue83U3A4/susdhMeauBpEmXNbuOPNh3Z8oXKnw0RwsYFxcXVj/pptZjH1cK4xvw9knMxuuaJ5Bpjqp5Z/LN5/wAdULx86rEoL6v391kVVpjmEYmrusc8Cd1rjGUwCYnSVwraPah2Iw9V1TE1WPqF0UhTBpEWhgfEju+ULofb7bgo4Z7A6HPaQOkQfOY8VzDEPxjNnAfUpOwzzG4N0vbvOmDb806kjkk04mc7/UXYzbVbBGpiKbA9jd1tQF0EBxsYzz1iF37Z+PZXpMqsMsqNDm9D7G11834LBM3WOc4tJneabh15bA4RFiuw9h8aG0hS3piS0+4+6Vvk+5vOrsDqsteOKB+qhNs7TFGk95OQMdUmWfjlP9TNomvjtxt20WgDqSC6fIDwQdGS3kY8OhUT6G+9z3TckknUkkk+imotAMf4jL1Rux2zJzIixLN0nQnX5klz2Xg66/Am2KeMs7+YSuvGUj+f2TiA7nQAg8TxRFV06qF7J0VxNBl6suz/AP1s6BVio0gqzbP/APWzoE4x7I2xLjGp915jjOQjmoRUIcRoXH3RDJ0+WQqCqDs5HwophbwKDpNm3PqjC2IDYk5eWamtOU9CHuhpiM+mnwoze3Y3bCb8z8lRYalLSBAMT1spG5HOZ8D0PBZ9RWi61RronheNTnHolP1wzE0nzZpz1Hj8zKYtNxPUfPFKNt2c1xykcYMfwjmeSldwweND2NeLBwnzU31hnKR7IxO9Qpm12Ba7R2g2lSe9/wCFjSbZn/iOpt4rTXNnlRv6hbRLy9oaXCWgvglrI7zWAiwe7M8jzSCttWmaOHa7Bta1jmzUbLTUa2N8SAJJGck3RvaLamIxFDfbR+nhnOB7oB3nZBznZnKMokASUFVrYx+Ba1zQcMx3ddA3hBMc90EkTHKUSNp6jpWP2fhqxpVGMZuwHNLQACCLWRDaO4WvYII4WyVf7G7bbUohm61pZDQBkYaLjrcwrZTrDOVGai2zwYYfEhzQ4ZELm/bfbzsRV/tqR7rLvcDIkGYnyCP7TbQrs3qFEgbxmdQDnHqq5T2cMO2Z3nvzJ9UrVcSS6wKm4N1xzGX6DitG1JJjQWnioa1x3ZJzJOQKiZWgwbW18if2Tk8NkrxLuYNz9vBRVsPNweYUf1IMT3Zzyv1m6mdWMtj54KioR9Dkh3MOqPqHnbkoTGqNZ2llalqnmBH+2z/qPZKMTib7ouU8wY/22/8AUeyqM6rDx3jHE+6LwxLeYtmENWPeI5nLqUdhgOqKqJmaEcb8uqNY0NlxAJI+D1UFHukH5f56reo+ctD8ClcFMfckRI48/wCFsx9yMzlxz/a6Hw7wL+fLnqt8SzduBb5mpo1O54z1mR6XS7azt5si0XPH+LIhgJzjTwNkDjXDKOPiEc+zlX3sRji7Dta7/HI8tFF2y2u+lT3WM3t8ODnQSGCIkwIBuRfglvYWt/tvE5GAOAkoftfteq1z6LGgscxu+7dJLZJm4sLRmrZf9EX9zijg9y/9s12cDOZic4k9FqTihhDd39sXZSIne4fi3d7wlCtxtf8At3UgXfR3pPdkAm8F2l7x8MZxFc0NyXGgHZR3Q7OJzzi2UlM71/Dbs5tFlIN3mPDnOgP/AMSIsCDqLXC6KzGw0LkDMXUDGNIljXlzZbYnUTqM7cyrxszan1ae+BumSCM4+CPNT1MTbsMNv1/9xjvzNI8jP3SXamJkjkPde2/iv/W7g6PMJGcVvb54nxtA+yn6/rTn0mfWE/Br6qD6hJvM/LIWpWM21y5L2/FtdOKuTF6LdUGYvyPRZZUi2pN+hQQeeIny9eCkbUjW/wAung0ZXrboG8llesXZWBRxdvAAiyDkAwdDmiIrXDYYi5Vjw/4R0SYuTeh+FvQeyGXStlvfP/Y+5ujqDIFgvUqME8ST7lEC0fPAotVK13/nA/vdbNfpmQf3Cjc6b5BauM5TIyPJJWpmvgk+2XSFOzET+IyPYoZr7fD4LVsjp8+6Q0UHxb5n6oDFvOfr9kSDa+n6jVB4wTfS/H0RBpp2Nxm7VeybPbPi039D6LbtLtOo2pVYz8L2t3u7MCIJnTNI9i19yux2m9B8bfdN9s7SdTrVA0BwexoM6WiefRUzvsno7RqtovoiNxxlxiSJjXIAwFozHVBRdSB/2yZNtc4nSYy5LGF2i5jHsABDxBJzFot5rFPHubSfRgQ5wdOoiP0CY1q7FPNIUz+AOJFtSMp8Z8U92XtcuLWOAENAkf5QIk84hJRjnfR+jAjemdRr8K3p7RIYxm6O46Q7WDMj19ErNEP+0BmkeRHuq+HFrRx8+aJ2njt9gHE+yEc7u+COZ4XzWHHXp8hal6j3oXg5NWpWH91Myr5fLIRrlu1/kijRofNhxQ9W4hYc/K68H5EoDNCpNjmrLhvwN6D2VTqZyM9VacKZYw/8R7BDLoBSfM8iZ81hz00GyWhzu8bk8OKwdkt/M5LBsJjUveQDpwWQ/wAwmx2K05vd6LLdit/O70Rg2E+/rkpWv9UyOyG/mcs/+Jb+Y+iMP7Qnc8+XzwUVR8zPzxT3/wAQ38zlh2xGH/JyMH2iozDpGhnyKeY/aW5VLwA7eptF+Yn4ES7s2z87vRFt2G0OBLi6GhtwMsvZOxPhV8Fjfph43Q7fbF9M/wBVnCYzca9paHbwi+mfpdWCjsBjTJJdIyIy6LahsFjNd6RqBbojC1W8PjSxj2boIfqcwo24ghjmQIJB5iOCtFDYLGBw3i7eEXAt0WjOzzAHN3iZ1gSE8Gqs+oSAOC3OSsY7Ms/O7yC2PZpv53eQQcqsFelWb/TTfzu8gvf6ZZ+d3kEK+0VhbBysv+mWfnd5BY/023/6O8ggfaK4FklWMdnG/wD0d5BYPZxv/wBHeQQPtFac5WvCthjP+o9ghx2dbP4z5BOKOFhoG9kBp+6E26//2Q=="
          >
          </v-img>
          <v-card-title>Un año con Emmet Fox</v-card-title>
          <v-card-subtitle class="pb-0 ml-1"> {{ diaDeHoy }} </v-card-subtitle>

          <v-card-actions
            ><v-btn text color="indigo accent-4" @click="irEmmetFox">
              LEER</v-btn
            >
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto mb-3" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="../../assets/madre_maria.png"
          >
          </v-img>

          <v-card-title>Retiro Etérico abierto</v-card-title>
          <v-card-subtitle class="pb-0">
            15 de marzo al 15 de abril
          </v-card-subtitle>
          <v-card-actions>
            <v-btn text color="indigo accent-4" @click="irRetiroEterico">
              LEER</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "PanelDerecho",
  data() {
    return {
      emmetFoxDiario: [
        { dia: "mayo22" },
        { dia: "mayo23" },
        { dia: "mayo24" },
        { dia: "mayo28" },
      ],
    };
  },
  computed: {
    diaDeHoy() {
      const hoy = new Date();
      const dia = hoy.getDate();
      const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];
      const mes = meses[hoy.getMonth()];
      return `${dia} de ${mes}`;
    },
  },

  methods: {
    dia() {
      const diaSeleccionado = this.$route.params.id;
      return this[diaSeleccionado];
    },
    irEmmetFox() {
      const hoy = new Date();
      const dia = hoy.getDate();
      const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];
      const mes = meses[hoy.getMonth()];
      const ruta = `${mes}${dia}`;
      this.$router.push(`/un-ano-con-emmet-fox/${ruta}`);
    },
    irRetiroEterico() {
      this.$router.push(`/retiro-eterico`);
    },
  },
};
</script>