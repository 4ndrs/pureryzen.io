# Copyright (c) 2022 4ndrs <andres.degozaru@gmail.com>
# SPDX-License-Identifier: MIT
# pylint: skip-file
"""Schema definition for the GraphQL endpoint"""
import graphene


class Query(graphene.ObjectType):
    hellow = graphene.String(msg=graphene.String())

    def resolve_hellow(root, info, msg):
        match msg.lower():
            case "hello world":
                return "Hola Mundo"
            case "hola mundo":
                return "Ciao Mondo"
            case _:
                return "Hello World"


schema = graphene.Schema(query=Query)
