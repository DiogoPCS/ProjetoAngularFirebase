import { orderBy } from '@firebase/firestore';
import { Injectable } from '@angular/core';
import { addDoc, getDocs, doc, updateDoc, collection, Firestore, deleteDoc, query, where, WhereFilterOp, startAt, endAt } from '@angular/fire/firestore';
import { AuthenticateService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})

export class CrudService {
    isLoading: boolean = false;
    handlerMessage = '';
    roleMessage = '';
    
    constructor(
        public firestore: Firestore,
        private _message: MessageService,
        private _auth: AuthenticateService,
        private _alertController: AlertController
    ) {}

    /*
    * @description: Inserir um novo registro no banco de dados
    * @param item: any
    * @param collection: string
    */
    insert(item: any, remoteCollectionName: string): Boolean {
        console.log(item)
        let result = false;
        
        if (!item) { 
            this._message.show('Não foi possível salvar'); 
            return false;
        }

        this.isLoading = true;
        const dbInstance = collection(this.firestore, remoteCollectionName);
        addDoc(dbInstance, item)
          .then(() => {
            this._message.show('Salvo com sucesso.');
            result = true;
          })
          .catch(() => {
            this._message.show('Erro ao salvar.');
          })
          .finally(() => {
            this.isLoading = false;
          });
        return result;
    }

    /*
    * @description: Pegar todos os itens do banco de dados
    * @param remoteCollection: string
    */
    fetchAll(remoteCollectionName: string): Promise<any> {
        //this._auth.isAdmin();
        this.isLoading = true;
        let data: any = [];

        const dbInstance = collection(this.firestore, remoteCollectionName);
        
        data = getDocs(dbInstance)
            .then((response) => {
                return [
                    ...response.docs.map((item) => {
                        return { ...item.data(), id: item.id 
                    }; 
                })];
            })
            .catch((_: any) => {
                this._message.show('Erro ao buscar item.');
                return [];
            })
            .finally(() => {
                this.isLoading = false;
            });

        return data;
    }

    /*
    * @description: Pegar um item usando um operador específico como = < > <> >= <=
    * @param collection: string
    */
    async fetchByOperatorParam(fieldName: string, operator: WhereFilterOp, fieldValue: any, remoteCollectionName: string): Promise<any> {
        //this._auth.isAdmin();
        this.isLoading = true;
        let data: any = [];

        const dbInstance = query(collection(this.firestore, remoteCollectionName), where(fieldName, operator, fieldValue));
        
        data = getDocs(dbInstance)
            .then((response) => {
                return [
                    ...response.docs.map((item) => {
                        return { ...item.data(), id: item.id 
                    };
                })];
            })
            .catch((_: any) => {
                this._message.show('Erro ao buscar item.');
                return [];
            })
            .finally(() => {
                this.isLoading = false;
            });

        return data;
    }

    /*
    * @description: Pegar os itens utilizando o operador Like para consulta
    * @param collection: string
    */
    async fetchByLike(fieldName: string, fieldValue: string, remoteCollectionName: string): Promise<any> {
        //this._auth.isAdmin();
        this.isLoading = true;
        let data: any = [];

        const dbInstance = query(collection(this.firestore, remoteCollectionName), orderBy(fieldName), startAt(fieldValue), endAt(fieldValue + '\uf8ff'));
        
        data = getDocs(dbInstance)
            .then((response) => {
                return [
                    ...response.docs.map((item) => {
                        return { ...item.data(), id: item.id 
                    };
                })];
            })
            .catch((_: any) => {
                this._message.show('Erro ao buscar item.');
                return [];
            })
            .finally(() => {
                this.isLoading = false;
            });

        return data;
    }
    

    /*
    * @description: Atualizar um item do banco de dados
    * @param id: item id string to locate and update record
    * @param data: Object data to update
    */
    update(id: string, data: any, remoteCollectionName: string): boolean {
        //this._auth.isAdmin();
        this.isLoading = true;
        let result = false;
        
        const dataToUpdate = doc(this.firestore, remoteCollectionName, id);

        updateDoc(dataToUpdate, {
            ...data
        })
            .then(() => {
                this._message.show('Informação Atualizada!');
                result = true;
                
            })
            .catch((_: any) => {
                this._message.show('Erro ao atualizar.');
                return [];
            })
            .finally(() => {
                this.isLoading = false;
            });

        return result;
    }

    /*
    * @description: Remover um item do banco de dados
    * @param id: item id string to locate and remove document
    */
    async remove(id: string, remoteCollectionName: string) {
        //this._auth.isAdmin();

        const alert = await this._alertController.create({
            header: 'Essa ação não poderá ser revertida!',
            buttons: [
                {
                text: 'Cancelar',
                role: 'cancel',
                },
                {
                text: 'Confirmar Exclusão',
                role: 'confirm',
                }
            ]
            });
        
            await alert.present();
        
            const { role } = await alert.onDidDismiss();

            if (role == 'confirm') {
                this.isLoading = true;
                const dataToDelete = doc(this.firestore, remoteCollectionName, id)
                deleteDoc(dataToDelete)
                    .then(() => {
                        this._message.show('Registro removido!');
                    })
                    .catch(()=> {
                        this._message.show('Erro ao remover!');
                    })
                    .finally(()=> {
                        this.isLoading = false;
                    });
            }
        }


}
